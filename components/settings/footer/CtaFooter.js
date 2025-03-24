import Link from "next/link";
import MailchimpSubscribeForm from "./MailchimpSubscribeForm";

export default function CtaFooter({title, text, link, officeTitle, officeText}){
  if(!(title || text || link || officeText || officeTitle)) return null;

  return (
    <div className="ia-footer-cta ia-bg-purple-2">
      <div className="inner">
        <div className="ia-footer-cta__in">
          {title && <div className="ia-sub-title ia-white wow fadeInUpS">{title}</div>}
          {text && <div className="h1 ia-white ia-text-cut wow animated-wow">{text}</div>}
          {
            link?.cached_url &&
            <div className="wow fadeInUpS" data-wow-delay=".2s">
              <Link href={link.cached_url}
                    className="btn btn--small btn--light open-form"><span>{link.title}</span></Link>
            </div>
          }
        </div>
        {
          (officeText || officeTitle) && (
          <div className="worldwide">
            <div className="ia-sub-title ia-sub-title--red wow fadeInUpS">{officeTitle}</div>
            <div className="worldwide__in">
              <div className="entry-content ia-white wow fadeInUpS" data-wow-delay=".2s">
                <p>{officeText}</p>
              </div>
            </div>
          </div>
          )
        }
        <div className="ia-flex ia-footer-subscribe wow fadeInRight">
          <div className="d2 wow fadeInLeft ia-white ia-bold ia-footer-subscribe__title"><span>Let’s Talk</span></div>
          <MailchimpSubscribeForm></MailchimpSubscribeForm>
          {/*<div className="ia-footer-subscribe__form">*/}
          {/*  <div className="ia-sub-title ia-sub-title--red">EMAIL NEWSLETTER</div>*/}
          {/*  <div className="entry-content ia-white"><p>Get the Latest Inspiration &amp; Insights</p></div>*/}
          {/*  <form id="mailchimp-subscribe-form">*/}
          {/*    <input type="hidden" id="mailchimp_nonce" value="53698e6a53"/>*/}
          {/*    <input type="email" name="email" id="email" placeholder="Your email" required=""/>*/}
          {/*    <button type="submit">Sign Up</button>*/}
          {/*    <div id="subscribe-response"></div>*/}
          {/*  </form>*/}
          {/*</div>*/}
        </div>
      </div>
    </div>
  )
}