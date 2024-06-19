"use client";

import { useEffect, useState, useRef } from "react"

import Image from "next/image";
import Link from "next/link";

import { useOverlayScrollbars } from "overlayscrollbars-react";

import Navbar from '@/components/Navbar'

export default function Home() {
  const stickyRef = useRef(null);
  const [sticky, setSticky] = useState(false);

  const [osApplied, setosApplied] = useState(null);
  const [initialize, instance] = useOverlayScrollbars({
    defer: true,
    events: {
      initialized: () => {
        setosApplied(true);
      },
      destroyed: () => {
        setosApplied(false);
      },
      scroll: () => {
        const { scrollLeft, scrollTop } = instance().elements().scrollOffsetElement;

        setSticky(scrollTop > stickyRef.current.offsetTop);
      },
    },
  });
  
  useEffect(() => {
    initialize(document.body);
  }, [initialize]);

  return (
    <>
    {osApplied ? (
      <>
        <main className="flex flex-col min-h-screen items-center">
          <Navbar
            sticky={sticky}
            stickyRef={stickyRef}
            pagedir={"home"}
          >
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
          </Navbar>
          
          <div className="content p-2 flex flex-col items-center w-full">
            <h1 className="text-4xl">
              Hello!
            </h1>
            <p className="mt-1">
              This is my website, its still under developement...
            </p>
            <div>

            </div>
          </div>
        </main>

        <footer className="p-4 h-20 footer flex flex-col items-center justify-center text-xs">
          <p>© 2024 brkpoint | All Rights Reserved</p>
        </footer>
      </>
    ) : (
      null
    )}
    </>
  );
}
