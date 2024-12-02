"use client";
import React, { useState } from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import Image from "next/image";

const NavLinks = [
  {
    title: "About",
    path: "/topics/about",
  },
  {
    title: "Projects",
    path: "/topics/projects",
  },
  {
    title: "Contact",
    path: "/topics/contact",
  },
];

const NavBar = () => {
  const [navbarOpen, setNavBarOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-85e font-sans">
      <div className="flex flex-wrap items-center justify-between mx-auto px-5 py-3">
        <Link
          href={"/"}
          className="text-3xl md:text-5xl text-white font-semibold"
        >
          <div className="relative group cursor-pointer">
            <div
                className="absolute -inset-1 bg-gradient-to-r from-red-600 to-orange-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200">
            </div>
            <div
                >
                <div className="space-y-1">
                <Image
            src="/img/IMG_7632.jpeg"
            alt="self image"
            className="relative transform rounded-full"
            width={50}
            height={50}
          />
                </div>
            </div>
        </div>
        </Link>

      

        <div className=" mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavBarOpen(true)}
              className="text-slate-200 flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavBarOpen(false)}
              className="text-slate-200 flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {NavLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="py-1 bg-gradient-to-l from-orange-400 to-orange-800"></div>
      {navbarOpen ? <MenuOverlay links={NavLinks} /> : null}
    </nav>
  );
};

export default NavBar;
