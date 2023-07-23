"use client";

import React, { useEffect, useState } from "react";

import NavbarHomeLink from "./NavbarHomeLink";

const Navbar = () => {
  const [screenWidth, setScreenWidth] = useState(0);
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleNavbarOpen = () => {
    setNavbarOpen(!navbarOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className=" fixed top-0 items-center flex justify-end w-full overflow-auto">
        {
          // if screen to small, then to drop down menu
          screenWidth > 800 ? (
            <>
              <div className="mr-auto">
                <NavbarHomeLink windowSize={screenWidth} />
              </div>
              <NavbarLink href="/me">About</NavbarLink>
              <NavbarLink href="/me#projects">Projects</NavbarLink>
              <NavbarLink href="/me#contact">Contact</NavbarLink>
            </>
          ) : (
            <div
              className="m-5 mx-8 cursor-pointer z-10"
              onClick={() => handleNavbarOpen()}
            >
              <img className="" src="/menu.svg" alt="" />
            </div>
          )
        }
      </div>
      {/*Only open if navbar open is true and mobile is true: Full page navbar */}
      {screenWidth < 800 ? (
        <div
          className={`${
            !navbarOpen ? " left-full" : " left-0"
          } fixed top-0 left-0 w-full h-full bg-black transition-all duration-500`}
        >
          <div className="flex flex-col justify-center items-center h-full">
            <NavbarHomeLink windowSize={screenWidth} />
            <MobileNavbarLink href="/me">About</MobileNavbarLink>
            <MobileNavbarLink href="/me#projects">Projects</MobileNavbarLink>
            <MobileNavbarLink href="/me#contact">Contact</MobileNavbarLink>
          </div>
          {/*top right back to close */}
          <div
            className="absolute top-0 right-0 m-5 mx-8 cursor-pointer z-10 rotate-180"
            onClick={() => handleNavbarOpen()}
          >
            <img src="/back.svg" alt="" />
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

interface NavbarLinkProps {
  href: string;
  children: String;
}

const NavbarLink = ({ href, children }: NavbarLinkProps) => {
  return (
    <a
      className=" text-gray-600 text-xl m-5 mx-8 hover:text-main transition-all duration-800 ease-in-out"
      href={href}
    >
      {children}
    </a>
  );
};

const MobileNavbarLink = ({ href, children }: NavbarLinkProps) => {
  return (
    <a
      href={href}
      className="text-gray-600 text-xl m-5 mx-8 hover:text-4xl hover:text-main transition-all duration-800 ease-in-out"
    >
      {children}
    </a>
  );
};

export default Navbar;
