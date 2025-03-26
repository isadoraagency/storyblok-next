'use client'
import {fetchStoriesByUUID} from "../../lib/storyblokApi";
import Link from "next/link";
import {Fragment, useEffect, useState} from "react";


export default  function InsightList({title, list}){
  const [insights, setInsights] = useState([]);
  useEffect(() => {

    async function fetchInsights() {
      const res = await fetchStoriesByUUID(list);
      setInsights(res);
    }
    if(list) fetchInsights();


  }, [list])

  if(insights === 0 ) return null;

  return (
    <div className="ia-insight">
      {title && <div className="ia-sub-title fadeInUpS wow">{title}</div>}

      <div className="ia-insight__list">
        {
          insights.map((item, i) => {
            return (
              <div className="ia-insight__item wow fadeInLeft" data-wow-delay={`${i*0.1+0.1}s`} key={item.id}>
                <a className="ia-insight__item-link"
                   href="https://isadoradev.wpengine.com/insights/ecommerce-user-experiences"></a>
                <a className="ia-arrow-link" href="https://isadoradev.wpengine.com/insights/ecommerce-user-experiences">
                  <svg xmlns="http://www.w3.org/2000/svg" width="31" height="26" viewBox="0 0 31 26" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M29.8338 14.0489H30.25V12.1684H29.8363L29.8162 12.1634C29.6919 12.1317 29.568 12.0984 29.4445 12.0638C28.9869 11.9347 28.5329 11.793 28.0831 11.6388C26.9441 11.2501 25.419 10.6484 23.8626 9.7959C20.704 8.06586 17.6558 5.4407 17.106 1.68412L16.97 0.753906L15.1096 1.02595L15.2456 1.95616C15.927 6.61475 19.6522 9.63418 22.9594 11.4451C23.4408 11.7084 23.9184 11.9497 24.3829 12.1684H0.25V14.0489H24.1328C23.5942 14.2897 23.0634 14.5477 22.5413 14.8224C19.1251 16.6239 15.2826 19.6553 15.2356 24.2857L15.2262 25.2259L17.1067 25.2447L17.1161 24.3045C17.1512 20.808 20.081 18.2455 23.4182 16.486C25.0454 15.6273 26.6783 15.0105 27.9101 14.6074C28.5243 14.4069 29.0346 14.2595 29.3894 14.1643C29.5371 14.1241 29.6852 14.0857 29.8338 14.0489Z"
                          fill="currentColor"></path>
                  </svg>
                </a>
                {
                  (item.content.featured_image?.filename && i > 0) && <div className="ia-insight__img" style={{backgroundImage: `url("${item.content.featured_image?.filename}/m/filters:format(webp):quality(80)")`}}></div>
                }
                <h3 className={i==0 ? ('h3') : ('h7')}>{item.content.title}</h3>
                {
                  (item.tag_list.length > 0) && <div className="ia-insight__tags">
                    {
                      item.tag_list.map((tag, index) => {
                        return (
                          <Fragment  key={index}>
                            <Link href="/tag" rel="tag">{tag}</Link>
                          </Fragment>
                        )
                      })
                    }
                  </div>
                }
              </div>
            )
          })
        }

      </div>
    </div>
  )
}