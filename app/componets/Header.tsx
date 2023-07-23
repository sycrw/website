"use client";

import { oswald } from "../fonts";
import { useEffect } from "react";

const Header = () => {
  useEffect(() => {
    const gallery = document.querySelector(".gallery");

    window.onmousemove = (e) => {
      const mouseX = e.clientX,
        mouseY = e.clientY;

      const xDecimal = mouseX / window.innerWidth,
        yDecimal = mouseY / window.innerHeight;

      const maxX = gallery!.offsetWidth - window.innerWidth,
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
    };
  }, []);

  return (
    <div className={oswald.className + " gallery"}>
      <a className="card" href="/me">
        <img src="/tim.jpg" alt="" />
        <p>Learn More About Me</p>
      </a>
      <a className="card" href="https://music-analyzer.tech">
        <img src="/music-analyzer.png" alt="" />
      </a>
    </div>
  );
};

export default Header;
