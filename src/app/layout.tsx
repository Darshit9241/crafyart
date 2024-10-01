"use client";
import { Box } from "@mui/material";
import dynamic from "next/dynamic";
import { Lexend } from "next/font/google";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { authCookiesGet } from "../redux/action/AuthToken";
import store from "../redux/store";
import "../styles/globals.css";
import OfferBox from "../components/common/OfferBox";

const FooterImport = dynamic(() => import("@/src/components/footer/Footer"));
const HeaderImport = dynamic(() => import("@/src/components/header/Header"));
const IndexImport = dynamic(() => import("@/src/private/Index"));
const MobileBottomBarImport = dynamic(
  () => import("@/src/components/common/MobileBottomBar")
);

const inter = Lexend({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const apiUrl = process.env.API_BASE_URL_2;
  const domain = process.env.NEXT_PUBLIC_DOMAIN;
  const [loading, setLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const [token, setToken] = useState<any>();

  useEffect(() => {
    if (typeof window !== "undefined") {
      setToken(authCookiesGet());
    }
  }, []);

  const pathname = usePathname();

  return (
    <Provider store={store}>
      <html lang="en" id="html_style">
        <style jsx global>{`
          html {
            font-family: ${inter.style.fontFamily} !important;
          }

          body {
            font-family: ${inter.style.fontFamily} !important;
          }

          h1,
          h2,
          h3,
          h4,
          h5,
          h6,
          p,
          input,
          div,
          button,
          ul,
          li {
            font-family: ${inter.style.fontFamily} !important;
            color: "#1C3048";
          }
        `}</style>

        <head>
          <script
            dangerouslySetInnerHTML={{
              __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-MGRWJBBC');
        `,
            }}
          />

          {/* <link rel="canonical" href={`${domain}`} /> */}

          <meta
            name="google-site-verification"
            content="KtsXt6HHOQiTZNZLGsCJwFMtkZuoWI0p042-0S2aRlY"
          />

          <script
            dangerouslySetInnerHTML={{
              __html: `
        (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "m5l0jp5wv6");
        `,
            }}
          />
        </head>

        <body>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
            integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
            referrerPolicy="no-referrer"
          />
          <link rel="icon" href="/favicon.png" />

          <link
            rel="icon"
            type="image/ico"
            sizes="192x192"
            href="/favicon.png"
          />

          <link rel="apple-touch-icon" href="/favicon.png" />

          <noscript
            dangerouslySetInnerHTML={{
              __html: `
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MGRWJBBC"
          height="0" width="0" style="display:none;visibility:hidden"></iframe>
        `,
            }}
          />

          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-FV7CT0VRZM"
          ></script>

          <script
            dangerouslySetInnerHTML={{
              __html: ` 
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-FV7CT0VRZM');
              `,
            }}
          ></script>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "http://schema.org",
                "@type": "Organization",
                name: "Crafty Art",
                alternateName: "CraftyArt",
                url: `https://www.craftyartapp.com/`,
                logo: `https://panel.craftyartapp.com/templates/uploadedFiles/crafty_assets/Mlogo.svg`,
                description:
                  "Crafty Art App is an easy-to-use online graphics design tool that helps you create invitations, flyers, brochures, business cards, logos, social media graphics, posters & banners.",
                sameAs: [
                  "https://www.facebook.com/craftyartapp",
                  "https://twitter.com/craftyartstudio",
                  "https://www.instagram.com/craftyart_official?igsh=MnJuM3JydWxsYXZy&utm_source=qr",
                  "https://www.youtube.com/channel/UCVt1DA8bQrM7YunIIrK-gSg",
                  "https://in.pinterest.com/craftyart_official",
                ],
              }),
            }}
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `   
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '920944635897586');
            fbq('track', 'PageView');
              `,
            }}
          ></script>

          <meta
            name="facebook-domain-verification"
            content="3nsioq3kz27llryrgqspeuqvw058e5"
          />

          <HeaderImport
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
          />
          <Box
            sx={{
              marginLeft: sidebarOpen ? "250px" : "0",
              marginTop: "70px",
            }}
            className={`max-lg:ml-0 ${token && "max-sm:mb-[80px]"}`}
          >
            <div style={{ zIndex: "5000000000000000", position: "fixed" }}>
              <Toaster />
            </div>

            {!loading && (
              <main
                className="main bg-[#00000051]"
                style={{ zIndex: "555555555555555555555555" }}
              >
                <span className="loader_span d"></span>
              </main>
            )}
            {children}
            <Box>
              {!token && !pathname?.includes("/s/") && <FooterImport />}
              {token && <MobileBottomBarImport />}
            </Box>
            <IndexImport />
            <OfferBox />
          </Box>
        </body>
      </html>
    </Provider>
  );
}
