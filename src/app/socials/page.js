"use client";

import { useEffect, useState, useRef } from "react"

import Image from "next/image";
import Link from "next/link";

import { useOverlayScrollbars } from "overlayscrollbars-react";

import Navbar from '@/components/Navbar'

export default function Home() {
    const socials = [
        {
            name: "discord",
            icon: "https://skillicons.dev/icons?i=discord",
            socialName: "shibaofficial",
            link: {
                isAvaiable: false,
                url: "",
            },
        },
        {
            name: "github",
            icon: "https://skillicons.dev/icons?i=github",
            socialName: "brkpoint",
            link: {
                isAvaiable: true,
                url: "https://github.com/brkpoint",
            },
        },
    ];

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
                            pagedir={"socials"}
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

                        <div className="content p-2 flex flex-col items-center w-full">
                            <ul className="flex flex-row flex-wrap">
                                {socials.map((social, id) => {
                                    return (
                                        <li key={id} className="m-1 p-3 bg-blur border rounded con-border flex flex-row">
                                            {social.link.isAvaiable ?
                                            <Link href={social.link.url} className="flex flex-row items-center">
                                                <Image
                                                    className="mr-1 rounded-md"
                                                    src={social.icon}
                                                    alt={social.name}
                                                    width={45}
                                                    height={45}
                                                />
                                                <span>{social.socialName}</span>
                                                <Image
                                                    className="ml-2"
                                                    src="https://icon-library.com/images/external-link-icon-png/external-link-icon-png-29.jpg"
                                                    alt="link-icon"
                                                    width={15}
                                                    height={15}
                                                />
                                            </Link>
                                            : 
                                            <span className="flex flex-row items-center">
                                                <Image
                                                    className="mr-1 rounded-md"
                                                    src={social.icon}
                                                    alt={social.name}
                                                    width={45}
                                                    height={45}
                                                />
                                                <span>{social.socialName}</span>
                                            </span>
                                            }
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </main>

                    <footer className="p-4 h-20 footer flex flex-col items-center justify-center text-xs">
                        <p>© 2024 brkpoint | All Rights Reserved</p>
                    </footer>
                </>
            ) : (<></>)}
        </>
    );
}