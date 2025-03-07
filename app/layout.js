import StoryblokProvider from "../components/StoryblokProvider";
import "/assets/scss/main.scss";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body>
      <div>Header</div>
       <StoryblokProvider>{children}</StoryblokProvider>
      <div>Footer</div>
    </body>
    </html>
  );
}
