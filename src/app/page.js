"use client";

import Image from "next/image";
import Link from "next/link";

import SimpleBar from 'simplebar-react';

import useSticky from "@/modules/Sticky";

export default function Home() {
  const { sticky, stickyRef } = useSticky();
  return (
    <>
      <nav ref={stickyRef} className={`z-10 flex-row text-sm w-full flex${sticky ? " sticky" : ""}`}>
        <div className="border border-zinc-400 shadow-lg rounded m-5 p-2 flex align-middle justify-between w-full">
          <div className="flex flex-row items-center">
            <Image
              className="rounded-full"
              src="https://avatars.githubusercontent.com/u/88441414"
              alt="pfp"
              width={32}
              height={32}
            />
            <span className="text-lg ml-2">Aleksander</span>
          </div>
          <div className="flex flex-row text-xl items-center">
            /home
          </div>
          <ul className="flex flex-row justify-around items-center">
            <li className="mr-2">
              <Link href="/" className="hover:font-bold hover:-translate-y-2">/home</Link>
            </li>
            <li className="mr-2">
              <Link href="/projects" className="hover:font-bold hover:-translate-y-2">/projects</Link>
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
        </div>
      </nav>

      <SimpleBar>
        <main className="m-4 flex min-h-screen flex-col items-center">
          <h1 className="text-4xl">
            Hello!
          </h1>
          <p className="mt-1">
            This is my website, its still under developement...
          </p>
          <div className="w-full">

          </div>
        </main>
      </SimpleBar>
    </>
  );
}
