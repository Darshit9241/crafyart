import { decryptData, encryptData } from "@/src/aes-crypto";
import Cookies from "js-cookie";

const domain = process.env.NEXT_PUBLIC_DOMAIN_BASE;

export const authCookiesSet = (value: string) => {
  const expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + 30);

  const cookieOptions = {
    expires: expirationDate,
  };

  if (process.env.NEXT_PUBLIC_NODE_ENV === "production") {
    Object.assign(cookieOptions, {
      domain: `.${domain}`,
    });
  }

  Cookies.set(
    "_sdf",
    encryptData(value, process.env.NEXT_PUBLIC_AES_KEY),
    cookieOptions
  );
};

export const authCookiesGet = () => {
  const value = Cookies.get("_sdf");
  return decryptData(value, process.env.NEXT_PUBLIC_AES_KEY);
};

export const userPremium = (value: string) => {
  const cookieOptions = {};

  if (process.env.NEXT_PUBLIC_NODE_ENV === "production") {
    Object.assign(cookieOptions, {
      domain: `.${domain}`,
    });
  }

  Cookies.set(
    "_pmf",
    encryptData(value, process.env.NEXT_PUBLIC_AES_KEY),
    cookieOptions
  );
};

export const userPremiumGet = () => {
  const premium = decryptData(
    Cookies.get("_pmf"),
    process.env.NEXT_PUBLIC_AES_KEY
  );
  if (premium) {
    return premium === "1";
  }
  return false;
};

export const setCC = (value: string) => {
   Cookies.set("cc", encryptData(value, process.env.NEXT_PUBLIC_AES_KEY));
};

export const getCC = (defaultVal?: string) => {
  const value = Cookies.get("cc");
  return decryptData(value, process.env.NEXT_PUBLIC_AES_KEY, defaultVal);
};

export const removeCookie = (key: string) => {
  Cookies.remove(key, { domain: `.${domain}` });
  Cookies.remove(key);
};

export function setCookie(key: string, val: string): void {
  Cookies.set(key, encryptData(val, process.env.NEXT_PUBLIC_AES_KEY), {
    expires: 30,
  });
}

export function getCookie(key: string): string | undefined {
  return decryptData(Cookies.get(key), process.env.NEXT_PUBLIC_AES_KEY);
}
