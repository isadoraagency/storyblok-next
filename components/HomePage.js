import {storyblokEditable, StoryblokServerComponent} from "@storyblok/react/rsc";

export default function HomePage({blok, story}){
  return <main {...storyblokEditable(blok)}>
    {blok.body.map((nestedBlok, i) => (
      <StoryblokServerComponent blok={nestedBlok} story={story} index={i} key={nestedBlok._uid} />
    ))}
  </main>
}