import StoryblokProvider from "../components/StoryblokProvider";
import "/assets/css/animate.css";
import "/assets/scss/main.scss";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import { fetchStory } from '@/lib/storyblokApi';
import {SpeedInsights} from "@vercel/speed-insights/next";

export default async function RootLayout({ children }) {

  const dataHeader = await fetchStory("settings/header");
  const dataFooter = await fetchStory("settings/footer");
  return (
    <html lang="en">
    <body>
      <Header data={dataHeader.data}></Header>
        <StoryblokProvider>
          {children}
        </StoryblokProvider>
      <Footer data={dataFooter.data}></Footer>
      <SpeedInsights />
    </body>
    </html>
  );
}
