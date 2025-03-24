import "@/assets/scss/home-page-new/works.scss";
import {storyblokEditable} from "@storyblok/react";
import {fetchStoriesByUUID} from "../../lib/storyblokApi";
import Link from "next/link";
import {Fragment} from "react";
export default async function WorkHome({blok}){
  let works = await fetchStoriesByUUID(blok.list);
  if(!works || works.length === 0) return  null;
  return (
    <div className="ia-works ia-bg-purple-2" {...storyblokEditable(blok)}>
      <div className="inner">
        {
          blok.subtitle && (
            <div className="ia-sub-title ia-white  wow fadeInUpS">{blok.subtitle }</div>
          )
        }
        {
          blok.title && (
            <h2 className="d2 ia-white ia-bold wow fadeInLeft">{blok.title}</h2>
          )
        }
        {
          <div className="ia-works__list">
            {
              works.map((work, i) => {
                console.log(work)
                return (
                  <Fragment key={work.uuid}>
                    <Link href={work.full_slug}
                          className="ia-works__item wow fadeInLeft"
                          data-wow-delay={`${(i+1)*0.1}s`}>
                      <div className="ia-works__img" >
                        <div className="visible" style={{backgroundImage: `url(${work.content.image.filename})`}}></div>
                      </div>
                      <h3 className="h4 ia-white ia-margin-1 wow fadeInUpS" data-wow-delay={`${(i+1)*0.1}s`}
                      ><span>{work.name}</span>
                      </h3>
                      <p className="ia-white ia-margin-0 wow fadeInUpS" data-wow-delay={`${(i+1)*0.1 +.1}s`}>{work.content.subtitle}</p>
                    </Link>
                  </Fragment>
                )
              })
            }
          </div>
        }
      </div>
      {
        blok.button?.cached_url && <div className="wow fadeInUpS">
          <div className="text-center ia-works__btn ">
            <Link href={blok.button?.cached_url}
                  className="btn btn--small btn--light"><span>{blok.button?.title}</span></Link>
          </div>
        </div>
      }
    </div>
  )
}