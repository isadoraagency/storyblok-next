import {StoryblokStory} from "@storyblok/react/rsc";
import { fetchStory } from '@/lib/storyblokApi';

export default async function Home({ params }) {
  const { slug } = await params;
  const {data} = await fetchStory(slug);

  if (!data) {
    return <div>Not Found</div>;
  }
  // console.log(bridgeOptions)

  return  <StoryblokStory story={data.story}  />;
}


