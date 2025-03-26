import { fetchStory } from '@/lib/storyblokApi';
import PageContent from "../../components/PageContent";

export const revalidate = 60;

export default async function Page({ params }) {
  const { slug } = params;
  const response = await fetchStory(slug);

  if (!response?.data?.story) {
    return <div>Not Found</div>;
  }

  return (
    <PageContent blok={response.data.story.content} story={response.data.story} />
  );
}