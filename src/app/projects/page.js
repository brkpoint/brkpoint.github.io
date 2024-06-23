"use client";

import { useEffect, useState, useRef } from "react"

import Image from "next/image";
import Link from "next/link";

import { useOverlayScrollbars } from "overlayscrollbars-react";

import Navbar from '@/components/Navbar'
import Timeline from "@/components/Timeline";
import TimelineItem from "@/components/TimelineItem";

export default function Home() {
    const timeline = [
        {
            name: "HelpyShiba",
            date: "06/12/2021",
            repo: {
                isAvaiable: false,
                url: "",
            },
            icons: [
                "https://skillicons.dev/icons?i=js",
                "https://skillicons.dev/icons?i=discordjs",
                "https://skillicons.dev/icons?i=nodejs",
            ],
        },
        {
            name: "LazyShiba",
            date: "11/03/2022",
            repo: {
                isAvaiable: false,
                url: "",
            },
            icons: [
                "https://skillicons.dev/icons?i=js",
                "https://skillicons.dev/icons?i=discordjs",
                "https://skillicons.dev/icons?i=nodejs",
            ],
        },
        {
            name: "example-bot_discord.js",
            date: "29/10/2022",
            repo: {
                isAvaiable: true,
                url: "https://github.com/brkpoint/example-bot_discord.js",
            },
            icons: [
                "https://skillicons.dev/icons?i=js",
                "https://skillicons.dev/icons?i=discordjs",
                "https://skillicons.dev/icons?i=nodejs",
            ],
        },
        {
            name: "CWS",
            date: "28/06/2023",
            repo: {
                isAvaiable: true,
                url: "https://github.com/brkpoint/CSS-Web-Stylizer/",
            },
            icons: [
                "https://skillicons.dev/icons?i=js",
                "https://skillicons.dev/icons?i=css",
            ],
        },
        {
            name: "brkpoint.github.io",
            date: "28/06/2023",
            repo: {
                isAvaiable: true,
                url: "https://github.com/brkpoint/brkpoint.github.io/",
            },
            icons: [
                "https://skillicons.dev/icons?i=css",
                "https://skillicons.dev/icons?i=js",
                "https://skillicons.dev/icons?i=nextjs",
                "https://skillicons.dev/icons?i=nodejs",
                "https://skillicons.dev/icons?i=react",
                "https://skillicons.dev/icons?i=tailwindcss",
            ],
        },
        {
            name: "Clipper-MacOS",
            date: "01/03/2024",
            repo: {
                isAvaiable: true,
                url: "https://github.com/brkpoint/Clipper-MacOS/",
            },
            icons: [
                "https://skillicons.dev/icons?i=swift",
            ],
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
                            pagedir={"projects"}
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
                            <Timeline>
                                {timeline.map((item, id) => {
                                    return (
                                        <TimelineItem key={id}>
                                            <div className="flex flex-col items-center">
                                                <div className="flex flex-row mb-1 w-full items-center justify-start">
                                                    {item.icons.map((url, id) => {
                                                        return (
                                                            <Image
                                                                key={id}
                                                                className="mr-1"
                                                                src={url}
                                                                alt="icon"
                                                                width={15}
                                                                height={15}
                                                            />
                                                        );
                                                    })}
                                                </div>
                                                {item.repo.isAvaiable ? 
                                                <Link href={item.repo.url} className="flex flex-row items-center text-md mr-1">
                                                    {item.name}
                                                    <Image
                                                        className="ml-2"
                                                        src="https://icon-library.com/images/external-link-icon-png/external-link-icon-png-29.jpg"
                                                        alt="link-icon"
                                                        width={15}
                                                        height={15}
                                                    />
                                                </Link>
                                                :
                                                <span className="text-md mr-1">{item.name}</span>
                                                }
                                            </div>
                                            <span className="text-xs">{item.date}</span>
                                        </TimelineItem>
                                    );
                                })}
                            </Timeline>
                        </div>
                    </main>

                    <footer className="p-4 h-20 footer flex flex-col items-center justify-center text-xs">
                        <p>© 2024 brkpoint | All Rights Reserved</p>
                    </footer>
                </>
            ) : ( <></> )}
        </>
    );
}
