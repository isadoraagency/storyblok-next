
import { fetchStory } from '@/lib/storyblokApi';
import PageContent from "../../components/PageContent";
export const revalidate = 60;
export default async function Page({ params }) {
  const { slug } = await params;
  const {data} = await fetchStory(slug);

  if (!data) {
    return <div>Not Found</div>;
  }

  return   <PageContent blok={data.story.content} story={data.story} />;
}


