'use client'
import {storyblokEditable, StoryblokServerComponent} from "@storyblok/react/rsc";
import '@/assets/scss/home-page-new/who-what.scss';

export default function WhoWhat({blok}){
  return (
    <div className="ia-what-who ia-bg-purple-2">
      <div className="ia-hero-home__padding"></div>
      <div className="inner" {...storyblokEditable(blok)}>
        {blok.list.map((nestedBlok) => (
          <StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))}
      </div>
    </div>
  )
}