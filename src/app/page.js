"use client";

import { useEffect, useState, useRef } from "react"

import Image from "next/image";
import Link from "next/link";

import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <>
      <main className="flex flex-col min-h-screen items-center">
        <Navbar
          pagedir={"home"}
        >
          <ul className="flex flex-row justify-around items-center">
            <li className="mr-2">
              <Link href="/" className="hover:font-bold hover:-translate-y-2">/home</Link>
            </li>
            <li className="mr-2">
              <Link href="/projects" className="hover:font-bold hover:-translate-y-2">/projects</Link>
            </li>
            <li className="mr-2">
              <Link href="/socials" className="hover:font-bold hover:-translate-y-2">/socials</Link>
            </li>
            <li className="mr-3">
              <Link href="https://github.com/brkpoint" className="hover:font-bold hover:-translate-y-2">/about</Link>
            </li>
            <li>
              <Link href="secret">
                <Image
                  src="/cat2.gif"
                  alt="kitty"
                  width={24}
                  height={24}
                />
              </Link>
            </li>
          </ul>
        </Navbar>

        <div className="content p-3 flex flex-col items-center w-full">
          <h1 className="text-4xl">
            Hello!
          </h1>
          <p className="mt-1 mb-5 flex flex-row flex-wrap justify-center">
            This is my website. If you have any ideas for things I could add, 
            <Link className="text-sky-400 hover:text-sky-500 flex flex-nowrap" href="/socials">
              contact me!
            </Link>
          </p>
          <div className="flex flex-row items-center justify-center flex-wrap">
            <p className="mr-4">If you want to play some games I&apos;ve made for browsers here is the list</p>
            <Link className="button flex flex-row items-center shadow-md" href="/games">
              Games
              <Image
                className="ml-2"
                src="https://icon-library.com/images/external-link-icon-png/external-link-icon-png-29.jpg"
                alt="link-icon"
                width={15}
                height={15}
              />
            </Link>
          </div>
        </div>
      </main>

      <footer className="p-4 h-20 footer flex flex-col items-center justify-center text-xs">
        <p>© 2024 brkpoint | All Rights Reserved</p>
      </footer>
    </>
  );
}
