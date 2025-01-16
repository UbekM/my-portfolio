/** @format */
"use client";

import React from "react";
import "@fontsource/space-grotesk";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    return setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="text-center py-3 text-xs bg-gray-800 flex justify-center items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse flex justify-center items-center">
          <div className="w-2 h-2 rounded-full border-2 border-green-400 animate-ping" />
        </div>
        <p>Available for Projects</p>
      </div>
      <nav className="flex justify-between lg:py-5 py-3 lg:px-36  px-7 items-center fixed w-full z-50 bg-gray-700 ">
        <p className="text-3xl font-medium">
          michael<span className="text-[#91FF00]">.</span>
        </p>
        <ul className="gap-5 text-xs hidden lg:flex">
          <li>
            <Link
              href="/"
              className="active:border-b border-[#91FF00] border-b-2 pb-2"
            >
              HOME
            </Link>
          </li>
          <li>
            <Link href="" className="">
              SERVICES
            </Link>
          </li>
          <li>
            <Link href="" className="">
              PROJECTS
            </Link>
          </li>
          <li>
            <Link href="" className="">
              TOOLS
            </Link>
          </li>
          <li>
            <Link href="" className="">
              CONTACT
            </Link>
          </li>
        </ul>
        <button className="px-5 py-3  rounded-[.3rem] text-xs bg-black hidden lg:block">
          <a href="https://calendly.com/ubekmichael" target="_blank">
            Let&apos;s Meet
          </a>
        </button>
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden "
          onClick={handleClick}
        >
          <Menu className="h-12 w-12" />
        </Button>
        <>
          {isOpen && (
            <ul className="flex flex-col gap-8 text-xs text-center w-full md:w-1/2 h-full fixed top-0 right-0 bg-gray-900 pt-20 animate-in slide-in-from-right duration-500">
              <p
                className="justify-self-end text-right pr-10 hover:cursor-pointer"
                onClick={handleClick}
              >
                X
              </p>
              <li>
                <Link
                  href="/"
                  className="active:border-b border-[#91FF00] border-b-2 pb-2"
                >
                  HOME
                </Link>
              </li>
              <li>
                <Link href="/about" className="">
                  SERVICES
                </Link>
              </li>
              <li>
                <Link href="/projects" className="">
                  PROJECTS
                </Link>
              </li>
              <li>
                <Link href="/tools" className="">
                  TOOLS
                </Link>
              </li>
              <li>
                <Link href="/contact" className="">
                  CONTACT
                </Link>
              </li>
            </ul>
          )}
        </>
      </nav>
    </div>
  );
};

export default Navbar;
