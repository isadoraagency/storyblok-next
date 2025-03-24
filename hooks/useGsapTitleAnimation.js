'use client'
import {  useRef } from "react";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

gsap.registerPlugin(useGSAP);

export function useGsapTitleAnimation() {
  const titlesRef = useRef([]);

  useGSAP(() => {
    const elements = titlesRef.current;
    if (!elements.length) return;

    elements.forEach((title) => {
      let xPos = longTitle(title);

      gsap.to(title.querySelectorAll("span"), {
        x: -xPos,
        duration: 1,
        ease: "power1.out",
        scrollTrigger: {
          trigger: title,
          start: "bottom bottom",
          end: "top 30%",
          scrub: 3,
          invalidateOnRefresh: true,
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  },{ scope: titlesRef });

  return titlesRef;
}
function longTitle(el) {
  if (!el) return 0;

  const span = el.querySelector("span");
  if (!span) return 0;

  const spanWidth = span.getBoundingClientRect().width;
  const elWidth = el.getBoundingClientRect().width;

  return spanWidth > elWidth ? spanWidth - elWidth : 0;
}
