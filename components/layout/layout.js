import { apiPlugin, storyblokInit } from '@storyblok/react/rsc'
import StoryblokProvider from "../../lib/StoryblokProvider";

export default function RootLayout({ children }) {
  return (
    <StoryblokProvider>
      <html lang="en">
      <body>{children}</body>
      </html>
    </StoryblokProvider>
  )
}