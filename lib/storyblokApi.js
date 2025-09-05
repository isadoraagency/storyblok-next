// import { getStoryblokApi } from '@/app/storyblok';
//
// export async function fetchStory(slug) {
//   let params = {version: process.env.NEXT_PUBLIC_STORYBLOK_VERSION};
//
//   const storyblokApi = getStoryblokApi();
//   return storyblokApi.get(`cdn/stories/${slug}`, params);
//
//
// }
//
// export async function fetchStoriesByUUID(uuids) {
//   if (!uuids || uuids.length === 0) return [];
//
//   const storyblokApi = getStoryblokApi();
//
//   try {
//     const { data } = await storyblokApi.get("cdn/stories/", {
//       by_uuids: uuids.join(","),
//       version: process.env.NEXT_PUBLIC_STORYBLOK_VERSION,
//     });
//     return data.stories;
//   } catch (error) {
//     console.error("Error fetching stories by UUID:", error);
//     return [];
//   }
// }
// lib/storyblokApi.js
import { getStoryblokApi } from '@/app/storyblok';

export async function fetchStory(slug) {
  const siteName = process.env.SITE_NAME;

  const fullSlug = slug === "home"
    ? `${siteName}/home`
    : `${siteName}/${slug}`;

  const storyblokApi = getStoryblokApi();
  const res = await storyblokApi.get(`cdn/stories/${fullSlug}`, {
    version: process.env.NEXT_PUBLIC_STORYBLOK_VERSION || "draft",
  });

  return res;
}