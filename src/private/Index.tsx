"use client";
import {
  EditorTools,
  Product,
  Templates,
} from "@/src/components/header/headerComponents/Menu";
import { authCookiesGet, setCC } from "@/src/redux/action/AuthToken";
import {
  cookieToken,
  saveCardData,
  tokenValue,
} from "@/src/redux/reducer/AuthDataReducer";
import {
  enterAccount,
  mainLoader,
  openSidebar,
} from "@/src/redux/reducer/actionDataReducer";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { isMobile, isTablet } from "react-device-detect";
import { useDispatch, useSelector } from "react-redux";
import api from "../clientApi/api";
import { RootState } from "../redux";
import { GetCountryCodeType, GetIpType } from "../interface/commonType";
import { StripePaymentMethodApiData } from "../interface/stripePaymentMethod";
import { pageName } from "../constants/closeSidebarPages";
import { allLandingPages } from "../constants/allLandingPages";

export default function Index() {
  const dispatch = useDispatch();
  const router = useRouter();
  const pathname = usePathname();
  const token = authCookiesGet();
  const mainLoading = useSelector((state: RootState) => state.actions.mainLoad);

  const productPaths = Product?.subName?.flatMap((category) =>
    category.allName.map((item) => item.path)
  );
  const editorToolsPaths = EditorTools?.subName?.flatMap((category) =>
    category.allName.map((item) => item.path)
  );
  const templatesPaths = Templates?.subName?.flatMap((category) =>
    category.allName.map((item) => item.path)
  );

  const allLandingPagesPath = allLandingPages.map((item) => item.path);

  useEffect(() => {
    if (typeof window !== "undefined") {
      dispatch(cookieToken(token));
    }
  }, [token]);

  useEffect(() => {
    dispatch(mainLoader(true));

    if (pathname) {
      if (token) {
        if (pathname === "/login" || pathname === "/signup") {
          router.push("/");
        }
        if (
          !isMobile &&
          !isTablet &&
          pathname !== "/your-account" &&
          pathname !== "/subscriptions" &&
          pathname !== "/about-us" &&
          pathname !== "/aboutus" &&
          pathname !== "/plans" &&
          !productPaths.includes(pathname) &&
          !editorToolsPaths.includes(pathname) &&
          !templatesPaths.includes(pathname) &&
          !pageName.includes(pathname) &&
          !allLandingPagesPath.includes(pathname)
        ) {
          dispatch(openSidebar(true));
        }
        dispatch(tokenValue(true));
      } else if (
        pathname === "/your-account" ||
        pathname === "/subscriptions" ||
        pathname === "/draft" ||
        pathname === "/trash" ||
        pathname === "/upload"
      ) {
        router.replace("/login");
      }
      if (
        !token ||
        productPaths.includes(pathname) ||
        editorToolsPaths.includes(pathname) ||
        templatesPaths.includes(pathname) ||
        pageName.includes(pathname) ||
        allLandingPagesPath.includes(pathname) ||
        pathname === "/plans"
      ) {
        dispatch(openSidebar(false));
      }
    }
  }, [token, pathname, isMobile, isTablet]);

  useEffect(() => {
    if (pathname) {
      if (
        pathname === "/your-account" ||
        pathname === "/subscriptions" ||
        pathname === "/plans" ||
        productPaths.includes(pathname) ||
        editorToolsPaths.includes(pathname) ||
        templatesPaths.includes(pathname) ||
        pageName.includes(pathname) ||
        allLandingPagesPath.includes(pathname)
      ) {
        dispatch(enterAccount(true));
      } else dispatch(enterAccount(false));
    }
  }, [pathname]);

  useEffect(() => {
    api.getIp().then((res: unknown) => {
      const ip = (res as GetIpType)?.ip;
      api.getCountryCode({ ip: ip }).then((response) => {
        const countryCode = (response as GetCountryCodeType)?.countryCode;
        setCC(countryCode);
      });
    });

    api.cardList().then((response: unknown) => {
      const res = response as StripePaymentMethodApiData;
      dispatch(saveCardData(res?.data));
    });
  }, []);

  return (
    <div>
      {mainLoading && (
        <main className="main" style={{ zIndex: "555555555555555555555555" }}>
          <span className="loader"></span>
        </main>
      )}
    </div>
  );
}
