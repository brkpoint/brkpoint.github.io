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
                    pagedir={"secret"}
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
                        <li>
                            <Link href="https://github.com/brkpoint" className="hover:font-bold hover:-translate-y-2">/about</Link>
                        </li>
                    </ul>
                </Navbar>

                <div className="content p-3 flex flex-col items-center justify-center min-h-screen w-full">
                    <Image
                        src="/cat2.gif"
                        alt="kitty"
                        width={128}
                        height={128}
                    />
                </div>
            </main>

            <footer className="p-4 h-20 footer flex flex-col items-center justify-center text-xs">
                <p>© 2024 brkpoint | All Rights Reserved</p>
            </footer>
        </>
    );
}