"use client";

import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className=" fixed top-0 flex justify-end bg-blue-600 w-full overflow-auto">
      <NavbarLink href="/">Home</NavbarLink>
      <NavbarLink href="/about">About</NavbarLink>
      <NavbarLink href="/skills">Skills</NavbarLink>
      <NavbarLink href="/projects">Projects</NavbarLink>
    </div>
  );
};

interface NavbarLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavbarLink = ({ href, children }: NavbarLinkProps) => {
  return (
    <Link
      className="px-10 py-2 font-light border-blue-400 dark:border-blue-700 border-2 m-2 rounded-2xl w-100 hover:rounded-lg transition-all duration-5"
      href={href}
    >
      {children}
    </Link>
  );
};

export default Navbar;
