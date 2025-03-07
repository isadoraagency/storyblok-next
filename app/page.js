import { StoryblokClient, ISbStoriesParams } from '@storyblok/react';
import { StoryblokStory } from '@storyblok/react/rsc';
import { getStoryblokApi } from '@/app/storyblok'; // Remember to import from the local file

export default async function Home() {
  const { data } = await fetchData();

  return (
    <div>
      <StoryblokStory story={data.story} />
    </div>
  );
}

export async function fetchData() {
  let sbParams = { version: process.env.NEXT_PUBLIC_STORYBLOK_VERSION };

  const storyblokApi = getStoryblokApi();
  return storyblokApi.get(`cdn/stories/home`, sbParams);
}