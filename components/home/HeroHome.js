import  '@/assets/scss/home-page-new/hero.scss';
export default function HeroHome(){
  return (
    <div className="ia-hero-home has-showcase anim">
      <svg className="ia-hero-home__dec" xmlns="http://www.w3.org/2000/svg" width="1252" height="490"
           viewBox="0 0 1252 490" fill="none">
        <defs>
          <linearGradient id="gradient" x1="-469.87" y1="491.75" x2="-396.263" y2="-233.291"
                          gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#A9B8F4">
              <animate attributeName="stopColor" values="#A9B8F4; #7149E9; #B56BCE; #A9B8F4" dur="10s"
                       repeatCount="indefinite"></animate>
            </stop>
            <stop offset="25%" stopColor="#ECECFF">
              <animate attributeName="stopColor" values="#ECECFF; #B56BCE; #A9B8F4; #ECECFF" dur="10s"
                       repeatCount="indefinite"></animate>
            </stop>
            <stop offset="45%" stopColor="#EBD4ED">
              <animate attributeName="stopColor" values="#EBD4ED; #A9B8F4; #7149E9; #EBD4ED" dur="10s"
                       repeatCount="indefinite"></animate>
            </stop>
            <stop offset="65%" stopColor="#F9C6E5">
              <animate attributeName="stopColor" values="#F9C6E5; #ECECFF; #B56BCE; #F9C6E5" dur="10s"
                       repeatCount="indefinite"></animate>
            </stop>
            <stop offset="80%" stopColor="#D8A9D7">
              <animate attributeName="stopColor" values="#D8A9D7; #EBD4ED; #A9B8F4; #D8A9D7" dur="10s"
                       repeatCount="indefinite"></animate>
            </stop>
            <stop offset="95%" stopColor="#7149E9">
              <animate attributeName="stopColor" values="#7149E9; #F9C6E5; #ECECFF; #7149E9" dur="10s"
                       repeatCount="indefinite"></animate>
            </stop>
            <stop offset="100%" stopColor="#B56BCE">
              <animate attributeName="stopColor" values="#B56BCE; #D8A9D7; #EBD4ED; #B56BCE" dur="10s"
                       repeatCount="indefinite"></animate>
            </stop>
            <animateTransform attributeName="gradientTransform" type="rotate" from="0 .5 .5" to="0 .5 .5" dur="10s"
                              repeatCount="indefinite"></animateTransform>
          </linearGradient>
        </defs>
        <path
          d="M399.373 211.488L447.796 122.496C497.527 37.4292 538.097 0.785194 625.781 0.78519C713.464 0.785186 754.034 37.4292 803.766 122.496L852.188 211.488C874.436 253.367 913.698 291.32 994.838 291.32L1129.64 291.32C1348.19 291.32 1236.95 591.015 1070.74 453.6L754.035 212.797C705.612 174.844 674.203 159.14 625.781 160.448C577.358 159.14 545.949 174.844 497.527 212.797L180.818 453.6C14.6114 591.015 -96.6293 291.32 121.926 291.32L256.723 291.32C337.864 291.32 377.125 253.367 399.373 211.488Z"
          fill="url(#gradient)"></path>
      </svg>
      <svg className="ia-hero-home__dec-2" xmlns="http://www.w3.org/2000/svg" width="1080" height="423"
           viewBox="0 0 1080 423">
        <defs>
          <linearGradient id="gradient3" gradientUnits="objectBoundingBox">
            <stop offset="0" stopColor="#FFB4A4">
              <animate attributeName="stopColor" values="#FFB4A4; #9AC6FF; #FEE2DE; #FFDFE4; #FAC0E5; #240945; #FFB4A4"
                       dur="10s" repeatCount="indefinite"></animate>
            </stop>
            <stop offset="0.2" stopColor="#FFD5D2">
              <animate attributeName="stopColor" values="#FFD5D2; #FEE2DE; #FFDFE4; #FAC0E5; #9AC6FF; #FFB4A4; #FFD5D2"
                       dur="10s" repeatCount="indefinite"></animate>
            </stop>
            <stop offset="0.4" stopColor="#FEE1E7">
              <animate attributeName="stopColor" values="#FEE1E7; #FFDFE4; #FAC0E5; #9AC6FF; #FFB4A4; #FFD5D2; #FEE1E7"
                       dur="10s" repeatCount="indefinite"></animate>
            </stop>
            <stop offset="0.6" stopColor="#FDD7E6">
              <animate attributeName="stopColor" values="#FDD7E6; #FAC0E5; #9AC6FF; #FFB4A4; #FFD5D2; #FEE2DE; #FDD7E6"
                       dur="10s" repeatCount="indefinite"></animate>
            </stop>
            <stop offset="0.8" stopColor="#FAC0E5">
              <animate attributeName="stopColor" values="#FAC0E5; #9AC6FF; #FFB4A4; #FFD5D2; #FEE2DE; #FFDFE4; #FAC0E5"
                       dur="10s" repeatCount="indefinite"></animate>
            </stop>
            <stop offset="1" stopColor="#9AC6FF">
              <animate attributeName="stopColor" values="#9AC6FF; #FFB4A4; #FFD5D2; #FEE2DE; #FFDFE4; #FAC0E5; #9AC6FF"
                       dur="10s" repeatCount="indefinite"></animate>
            </stop>
            <animateTransform attributeName="gradientTransform" type="rotate" from="0 .5 .5" to="0 .5 .5" dur="10s"
                              repeatCount="indefinite"></animateTransform>
          </linearGradient>
        </defs>
        <path
          d="M345.126 240.681L386.901 317.456C429.804 390.844 464.804 422.457 540.45 422.457C616.095 422.457 651.096 390.844 693.999 317.456L735.773 240.681C754.967 204.552 788.838 171.81 858.838 171.81L975.129 171.81C1163.68 171.81 1067.71 -86.7395 924.323 31.8095L651.096 239.552C609.321 272.295 582.224 285.843 540.45 284.714C498.676 285.843 471.579 272.295 429.804 239.552L156.577 31.8095C13.1894 -86.7394 -82.7788 171.81 105.77 171.81L222.061 171.81C292.062 171.81 325.933 204.552 345.126 240.681Z"
          fill="url(#gradient3)"></path>
      </svg>
      <svg className="ia-hero-home__circle" width="665" height="665" viewBox="0 0 665 665" fill="none"
           xmlns="http://www.w3.org/2000/svg">
        <circle cx="332.285" cy="332.285" r="332.285" transform="matrix(-0.866025 -0.5 -0.5 0.866025 786.488 210.816)"
                fill="url(#gradient2)"></circle>
        <defs>
          <linearGradient id="gradient2" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#ECBBD8">
              <animate attributeName="stopColor"
                       values="#ECBBD8; rgba(241, 222, 204, 0.00); rgba(241, 222, 204, 0.00); #ECBBD8" dur="10s"
                       repeatCount="indefinite"></animate>
            </stop>
            <stop offset="100%" stopColor="rgba(241, 222, 204, 0.00)">
              <animate attributeName="stopColor"
                       values="rgba(241, 222, 204, 0.00); #ECBBD8; rgba(241, 222, 204, 0.00); rgba(241, 222, 204, 0.00)"
                       dur="10s" repeatCount="indefinite"></animate>
            </stop>
            <animateTransform attributeName="gradientTransform" type="rotate" from="0 .5 .5" to="0 .5 .5" dur="10s"
                              repeatCount="indefinite"></animateTransform>
          </linearGradient>
        </defs>
      </svg>
      <svg className="ia-hero-home__circle-2" width="173" height="173" viewBox="0 0 173 173" fill="none"
           xmlns="http://www.w3.org/2000/svg">
        <rect width="172" height="172" rx="86" transform="matrix(0.866025 0.5 0.5 -0.866025 -31.3066 118.424)"
              fill="url(#paint0_linear_3188_7527)"></rect>
        <defs>
          <linearGradient id="paint0_linear_3188_7527" x1="42.9967" y1="-5.86112" x2="123.391" y2="184.892"
                          gradientUnits="userSpaceOnUse">
            <stop stopColor="#D7DCFC">
              <animate attributeName="stopColor" values="#D7DCFC; #BEA7FF; #E98EB9; #CB44DF; #D7DCFC" dur="10s"
                       repeatCount="indefinite"></animate>
            </stop>
            <stop offset="0.348516" stopColor="#BEA7FF">
              <animate attributeName="stopColor" values="#BEA7FF; #E98EB9; #CB44DF; #D7DCFC; #BEA7FF" dur="10s"
                       repeatCount="indefinite"></animate>
            </stop>
            <stop offset="0.659717" stopColor="#E98EB9">
              <animate attributeName="stopColor" values="#E98EB9; #CB44DF; #D7DCFC; #BEA7FF; #E98EB9" dur="10s"
                       repeatCount="indefinite"></animate>
            </stop>
            <stop offset="1" stopColor="#CB44DF">
              <animate attributeName="stopColor" values="#CB44DF; #D7DCFC; #BEA7FF; #E98EB9; #CB44DF" dur="10s"
                       repeatCount="indefinite"></animate>
            </stop>
            <animateTransform attributeName="gradientTransform" type="rotate" from="0 .5 .5" to="0 .5 .5" dur="10s"
                              repeatCount="indefinite"></animateTransform>
          </linearGradient>
        </defs>
      </svg>


      <div className="inner">
        <h1 className="d2 ia-bold ia-purple-2">
          <span className="wow fadeInLeft">Elevate</span>
          <span className="wow fadeInRight">your brand</span>
        </h1>
        <div className="ia-hero-home__in wow fadeInUp" data-wow-delay="0.2s">
          <div className="ia-hero__description p2 ia-purple-1">
            <p>Driven by innovation and human behavior, our web design agency is changing the way brands connect with
              audiences in a digital world.</p>
          </div>
        </div>
        <video className="wow fadeInUp" data-wow-delay="0.2s" width="1320" height="742" controls autoPlay muted loop playsInline>
          <source
            src="https://isadoradev.wpengine.com/wp-content/uploads/2024/04/IA-Website-Homepage-Sizzle-Reel-Animation_V5_1_2.webm"
            type="video/webm"/>
          <source
            src="https://isadoradev.wpengine.com/wp-content/uploads/2024/04/IA-Website-Homepage-Sizzle-Reel-Animation_V5_1_2.mp4"
            type="video/mp4"/>
        </video>

      </div>
    </div>
  )
}