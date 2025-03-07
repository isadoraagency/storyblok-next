import {StoryblokServerComponent} from "@storyblok/react/rsc";

const PageContent = ({ blok, story }) => {
  return <StoryblokServerComponent blok={blok}  story={story} />;
};

export default PageContent;
