import { StoryblokStory } from '@storyblok/react/rsc';
import { fetchStory } from '@/lib/storyblokApi';

export const revalidate = 60;

export default async function Page({ params }) {
  const slug = params?.slug?.join("/") || "home";
  const { data } = await fetchStory(slug);

  if (!data?.story) {
    return <div>Not Found</div>;
  }

  return <StoryblokStory story={data.story} />;
}
