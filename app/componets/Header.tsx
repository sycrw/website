"use client";

import { oswald } from "../fonts";
import { useEffect } from "react";

const Header = () => {
  useEffect(() => {
    //if client is using a touch screen or the screen is to small, then redirect to /me
    if (window.innerWidth < 800) {
      window.location.href = "/me";
    }

    const gallery: any = document.querySelector(".gallery");

    function handleMouseEnter(e: MouseEvent) {
      console.log("mouse move");
      const mouseX = e.clientX,
        mouseY = e.clientY;

      const xDecimal = mouseX / window.innerWidth,
        yDecimal = mouseY / window.innerHeight;

      const maxX = gallery.offsetWidth - window.innerWidth,
        maxY = gallery.offsetHeight - window.innerHeight;

      const panX = maxX * xDecimal * -1,
        panY = maxY * yDecimal * -1;

      gallery!.animate(
        {
          transform: `translate(${panX}px, ${panY}px)`,
        },
        {
          duration: 4000,
          fill: "forwards",
          easing: "ease",
        }
      );
    }
    handleMouseEnter(new MouseEvent("mousemove"));
    window.onmousemove = (e) => {
      handleMouseEnter(e);
    };
  }, []);

  return (
    <div className={oswald.className + " gallery"}>
      <a className="card" href="/me">
        <img src="/tim.jpg" alt="" />
        <p>Learn More About Me</p>
      </a>
      <a className="card" href="https://music-analyzer.tech">
        <img src="/Music-Analyzer.png" alt="" />
      </a>
      <a className="card" href="/me#about">
        <p>About</p>
      </a>
      <a className="card" href="/me#projects">
        <p>Projects</p>
      </a>
      <a className="card" href="/me#skills">
        <p>skills</p>
      </a>
    </div>
  );
};

export default Header;
