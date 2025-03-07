import { storyblokEditable, StoryblokServerComponent } from '@storyblok/react/rsc';

const Page = ({ blok  }) => {
  return <main {...storyblokEditable(blok)}>
    {blok.body.map((nestedBlok, i) => (
      <StoryblokServerComponent blok={nestedBlok} index={i} key={nestedBlok._uid} />
    ))}
  </main>
}


export default Page;