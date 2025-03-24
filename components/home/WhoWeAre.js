import {renderRichText, storyblokEditable} from "@storyblok/react";
import {useWrappedWords} from "../../hooks/useWrappedWords";

export default function WhoWeAre({blok}){
  const wrappedText = useWrappedWords(renderRichText(blok.description));

  return (
    <div className="ia-who" {...storyblokEditable(blok)}>
      <div className="ia-sub-title ia-white">{blok.title}</div>

      <div className="h1 ia-white wow ia-text-cut" >{wrappedText}</div>






    </div>

  )
}