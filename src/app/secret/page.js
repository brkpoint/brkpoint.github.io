"use client";

import Image from "next/image";
import Link from "next/link";

import { OverlayScrollbarsComponent } from "overlayscrollbars-react";

import useSticky from "@/modules/Sticky";

export default function Home() {
    const { sticky, stickyRef } = useSticky();
    return (
        <OverlayScrollbarsComponent className="h-full" defer>
            <main className="flex flex-col h-full items-center">
                <nav className={`z-10 p-3 flex-row text-sm w-full flex${sticky ? " sticky" : ""}`}>
                    <div className={`p-3 flex rounded align-middle navbar-border w-full${sticky ? " shadow-2xl" : ""}`}>
                        <div className="flex w-full justify-between" ref={stickyRef}>
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
                                /secret
                            </div>
                            <ul className="flex flex-row justify-around items-center">
                                <li className="mr-2">
                                    <Link href="/" className="hover:font-bold hover:-translate-y-2">/home</Link>
                                </li>
                                <li className="mr-2">
                                    <Link href="/projects" className="hover:font-bold hover:-translate-y-2">/projects</Link>
                                </li>
                                <li>
                                    <Link href="https://github.com/brkpoint" className="hover:font-bold hover:-translate-y-2">/about</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <div className="content p-2 flex flex-col items-center justify-center h-full w-full">
                    <Image
                        src="/cat2.gif"
                        alt="kitty"
                        width={128}
                        height={128}
                    />
                </div>
            </main>
            <footer className="p-4 footer flex flex-col items-center justify-center text-xs">
                <p>© 2024 brkpoint | All Rights Reserved</p>
            </footer>
        </OverlayScrollbarsComponent>
    );
}
