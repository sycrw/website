"use client";

const NavbarHomeLink = ({ windowSize }: { windowSize: number }) => {
  return (
    <a
      href={
        //if mobile, then redirect to /me else redirect to /
        windowSize < 800 ? "/me" : "/"
      }
      className="text-main m-5 mx-8 font-bold text-4xl z-10"
    >
      Tim Kausemann
    </a>
  );
};

export default NavbarHomeLink;
