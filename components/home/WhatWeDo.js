import Link from "next/link";

export default function WhatWeDo({blok}){
  return (
    <div className="ia-what">
      <div className="ia-what__in">
        <div className="ia-what__left">
          {blok.sub_title && <div className="ia-sub-title ia-white wow fadeInUpS">{blok.sub_title}</div>}
          {
            blok.services_page.length && (
              <div className="ia-what__images">
                {
                  blok.services_page.map((service) => {
                    return (
                      <div className="ia-what__image" key={service._uid} style={{backgroundImage: `url(${service.image.filename}`}}></div>
                    )
                  })
                }
              </div>
            )
          }
          {
            blok.services_page.length && (
              <div className="ia-what__list">
                {
                  blok.services_page.map((service) => {
                    return (
                      <div className="ia-what__item wow fadeInLeft"  key={service._uid}  data-index="0" data-wow-delay="0s">
                        {
                          service.link.cached_url &&  <Link className="h4" href={service.link.cached_url}><span>{service.title}</span></Link>
                        }
                      </div>
                    )
                  })
                }
              </div>
            )
          }
        </div>

        <div className="ia-what__right wow fadeInUp">
          <div className="ia-what__info">
            {
              blok.title && <div className="ia-sub-title ia-sub-title--red">{blok.title}</div>
            }
            {
              blok.description && (
                <div className="entry-content ia-white">
                  <p>{blok.description}</p>
                </div>
              )
            }
            {
              blok.link?.cashed_url && <Link href={blok.link.cashed_url} target="_self" className="p4 ia-semi-bold ia-link ia-link--arrow ia-link--white">{blok.link?.title}</Link>
            }
          </div>

          <div className="ia-what__info">
            {
              blok.addition_title && <div className="ia-sub-title ia-sub-title--red">{blok.addition_title}</div>
            }
            <div className="ia-what__info-flex">
              <div className="ia-what__info-left ">
                {
                  blok.description_addition && <div className="entry-content ia-white">
                    <p>{blok.description_addition}</p>
                  </div>
                }
                {
                  blok.addition_link?.cashed_url && <Link href={blok.addition_link?.cashed_url} target="_self" className="p4 ia-semi-bold ia-link ia-link--arrow ia-link--white">{blok.addition_link?.title}</Link>
                }
              </div>
              {
                blok.addition_image?.filename && <div className="ia-what__info-right">
                  <img alt="instagram video" src={blok.addition_image?.filename}/>
                </div>
              }
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}