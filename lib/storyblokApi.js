import { getStoryblokApi } from '@/app/storyblok';

export async function fetchStory(slug) {
  let params = { version: process.env.NEXT_PUBLIC_STORYBLOK_VERSION };

  const storyblokApi = getStoryblokApi();
  return storyblokApi.get(`cdn/stories/${slug}`, params);

}