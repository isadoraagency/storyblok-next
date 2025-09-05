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
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

const Storyblok = storyblokInit({
  accessToken: process.env.STORYBLOK_API_KEY,
  use: [apiPlugin],
});

export async function fetchStory(slug) {
  const siteName = 'events';

  // если slug пустой -> home
  const cleanedSlug = Array.isArray(slug) ? slug.join("/") : slug || "home";

  // добавляем siteName в начало
  const fullSlug = cleanedSlug === "home"
    ? `${siteName}/home`
    : `${siteName}/${cleanedSlug}`;

  try {
    const res = await Storyblok.get(`cdn/stories/${fullSlug}`, {
      version: process.env.NEXT_PUBLIC_STORYBLOK_VERSION || "draft",
    });
    return res;
  } catch (e) {
    console.error("Error fetching story", e);
    return null;
  }
}
