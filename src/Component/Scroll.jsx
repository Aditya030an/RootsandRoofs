import flat3 from "./photos/villa1.avif";
import com1 from "./photos/villa3.avif";
import com2 from "./photos/villa2.avif";
import com3 from "./photos/villa1.avif";
import img1 from "/allPropertyLogo/logo3.png";
import img2 from "/allPropertyLogo/logo7.png";
import img3 from "/allPropertyLogo/logo5.png";
import img4 from "/propertyList/madhuban/img1.png";

import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const Scroll = () => {
  const glow1Ref = useRef(null);
  const glow2Ref = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline();

    tl.to(".img1 .image", {
      translateY: "0%",
      duration: 1.5,
      ease: "power2.inOut",
      scale: 1.2,
      opacity: 1,
      scrollTrigger: {
        trigger: ".img1",
        start: "top 50%",
        end: "bottom 50%",
        scrub: 1,
      },
    })
      .to(".img2 .image", {
        translateY: "0%",
        duration: 1.5,
        ease: "power2.inOut",
        scale: 1.2,
        opacity: 1,
        scrollTrigger: {
          trigger: ".img2",
          start: "top 50%",
          end: "bottom 50%",
          scrub: 1,
        },
      })
      .to(".img3 .image", {
        translateY: "0%",
        duration: 1.5,
        ease: "power2.inOut",
        scale: 1.2,
        opacity: 1,
        scrollTrigger: {
          trigger: ".img3",
          start: "top 120%",
          end: "bottom 80%",
          scrub: 1,
        },
      })
      .to(".img4 .image", {
        translateY: "0%",
        duration: 1.5,
        ease: "power2.inOut",
        scale: 1.2,
        opacity: 1,
        scrollTrigger: {
          trigger: ".img4",
          start: "top 120%",
          end: "bottom 80%",
          scrub: 1,
        },
      });

    // 👇 Random movement function
    const moveRandom = (el) => {
      gsap.to(el, {
        x: gsap.utils.random(-120, 120),
        y: gsap.utils.random(-120, 120),
        duration: gsap.utils.random(3, 6),
        ease: "sine.inOut",
        onComplete: () => moveRandom(el), // loops forever
      });
    };

    moveRandom(glow1Ref.current);
    moveRandom(glow2Ref.current);

    // Cleanup on unmount
    return () => {
      gsap.killTweensOf(glow1Ref.current);
      gsap.killTweensOf(glow2Ref.current);
    };
  }, []);

  return (
    <div className="relative w-full h-screen bg-[#192739] text-white overflow-hidden flex items-center justify-center">
      
      {/* Glow Ball 1 - Top Left */}
      <div
        ref={glow1Ref}
        className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-br from-[#0e2338] via-[#1e3a8a] to-[#2563eb] rounded-full opacity-30 blur-3xl pointer-events-none"
      />

      {/* Glow Ball 2 - Bottom Right */}
      <div
        ref={glow2Ref}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-tr from-emerald-400/30 to-cyan-400/20 rounded-full blur-3xl pointer-events-none"
      />

      {/* Central Text */}
      <div className="text-center z-10">
        <h1
  style={{
    fontFamily: "Goldman",
    WebkitTextStroke: "0.2vw #fbbf24", // 🔥 sun color
    color: "transparent",
  }}
  className="text-[2.5rem] md:text-[6rem] font-bold leading-tight"
>
  Where Dreams <br /> Meet Homes
</h1>
      </div>

      {/* Top Center - Balloons */}
      {/* <div className="img1 overflow-hidden absolute top-[14%] left-400 transform -translate-x-1/2 h-[120px] md:h-auto w-[150px] md:w-[300px]">
         <a href="/propertyDetails/101" target="_blank" rel="noopener noreferrer">
          <img
            src={img1}
            alt="Balloons"
            loading="lazy"
            className="image opacity-0 translate-y-[120%] rounded shadow-lg"
          />
        </a>
      </div> */}

      {/* Top Right - Girl */}
      {/* <div className="img2 overflow-hidden absolute top-[25%] md:top-[30%] right-[3%] transform h-[110px] md:h-auto w-[200px] md:w-[270px]">
         <a href="/propertyDetails/101" target="_blank" rel="noopener noreferrer">
          <img
            src={img2}
            alt="Girl"
            loading="lazy"
            className="image opacity-0 translate-y-[100%] rounded shadow-lg"
          />
        </a>
      </div> */}

      {/* Bottom Left - Plaque */}
      {/* <div className="img3 overflow-hidden absolute bottom-[12%] left-[1%] w-[200px] md:w-[290px]">
        <a href="/propertyDetails/101" target="_blank" rel="noopener noreferrer">
          <img
            src={img3}
            alt="Plaque"
            loading="lazy"
            className="image opacity-0 translate-y-[100%] rounded shadow-lg"
          />
        </a>
      </div> */}

      {/* Bottom Center - Man */}
      {/* <div className="img4 overflow-hidden absolute bottom-[5%] left-1/2 transform -translate-x-1/2 w-[180px] md:w-[300px]">
        <a href="/propertyDetails/101" target="_blank" rel="noopener noreferrer">
          <img
            src={img4}
            alt="Man"
            loading="lazy"
            className="image opacity-0 translate-y-[100%] rounded shadow-lg"
          />
        </a>
      </div> */}
    </div>
  );
};

export default Scroll;