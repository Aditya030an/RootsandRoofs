import flat3 from "./photos/villa1.avif";
import com1 from "./photos/villa3.avif";
import com2 from "./photos/villa2.avif";
import com3 from "./photos/villa1.avif";
import img1 from "/propertyList/madhuban/img1.png";
import gsap from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);
const Scroll = () => {
  const tl = gsap.timeline();
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
  }, []);
  return (
    <div className="relative w-full h-screen bg-[#192739] text-white overflow-hidden flex items-center justify-center">
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-gradient-to-br from-[#0e2338] via-[#1e3a8a] to-[#2563eb] rounded-full opacity-20 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tr from-emerald-400/30 to-cyan-400/20 rounded-full blur-3xl"></div>
      {/* Central Text */}
      <div className="text-center z-10">
        <h1
          style={{
            fontFamily: "Goldman",
            webkitTextStroke: ".2vw white",
            color: "transparent",
          }}
          className=" text-[2.5rem] md:text-[6rem]  font-bold leading-tight"
        >
          Where Dreams <br /> Meet Homes
        </h1>
      </div>

      {/* Top Center - Balloons */}
      <div className="img1 overflow-hidden absolute h-[10vw] top-[14%] left-400 transform -translate-x-1/2 h-[120px] md:h-auto w-[150px] md:w-[300px] ">
        <Link to="/">
          <img
            src={com3}
            alt="Balloons"
            loading="lazy"
            className="image opacity-0 translate-y-[120%]   rounded shadow-lg"
          />
        </Link>
      </div>

      {/* Top Right - Girl */}
      <div className="img2 overflow-hidden absolute  top-[25%] md:top-[30%] right-[3%] transform h-[110px] md:h-auto w-[200px] md:w-[270px]   ">
        <Link to="/">
          <img
            src={flat3}
            alt="Girl"
            loading="lazy"
            className="image opacity-0 translate-y-[100%] rounded shadow-lg"
          />
        </Link>
      </div>

      {/* Bottom Left - Plaque */}
      <div className="img3 overflow-hidden absolute bottom-[12%] transform  left-[1%] w-[200px] md:w-[290px] h-[fit]">
        <Link to="/">
          <img
            src={com1}
            alt="Plaque"
            loading="lazy"
            className="image opacity-0 translate-y-[100%] rounded shadow-lg"
          />
        </Link>
      </div>

      {/* Bottom Center - Man */}
      <div className="img4 overflow-hidden absolute bottom-[5%] left-1/2 transform -translate-x-1/2 w-[180px] md:w-[300px] h-[fit]">
        <a
          href="/propertyDetails/101"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={img1}
            alt="Man"
            loading="lazy"
            className="image  opacity-0 translate-y-[100%] rounded shadow-lg"
          />
        </a>
      </div>
    </div>
  );
};

export default Scroll;
