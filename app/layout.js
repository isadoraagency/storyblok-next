import StoryblokProvider from "../components/StoryblokProvider";
import "/assets/css/animate.css";
import "/assets/scss/main.scss";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import { fetchStory } from '@/lib/storyblokApi';
import {SpeedInsights} from "@vercel/speed-insights/next";
import Head from "next/head";


export default async function RootLayout({ children }) {

  const dataHeader = await fetchStory("settings/header");
  const dataFooter = await fetchStory("settings/footer");

  return (
    <>
    <Head>
      {/* Google Tag Manager Script */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-N9KBFQX'); 
            `,
        }}
      ></script>
    </Head>
      <html lang="en">

        <body>
          {/* Google Tag Manager noscript */}
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-N9KBFQX"
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            ></iframe>
          </noscript>

          <Header data={dataHeader.data}></Header>
          <StoryblokProvider>
            {children}
          </StoryblokProvider>
          <Footer data={dataFooter.data}></Footer>
          <SpeedInsights />
        </body>
      </html>
    </>
  );
}
