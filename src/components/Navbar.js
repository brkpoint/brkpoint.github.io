import { useEffect, useState, useRef } from "react"

import Image from "next/image";
import Link from "next/link";

import { useOverlayScrollbars } from "overlayscrollbars-react";

export default function Navbar({ children, pagedir }) {
    const [dropdownOpen, setDropdownOpen] = useState(false);

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
        <nav className={`z-10 p-3 flex-col text-sm w-full flex${sticky ? " sticky" : ""}`}>
            <div className={`p-3 flex rounded align-middle navbar-border bg-blur w-full${sticky ? " shadow-2xl" : ""}`}>
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
                        /{pagedir}
                    </div>
                    <div 
                        className="navbar-dropdown-button cursor-pointer"
                        onClick={() => { setDropdownOpen(!dropdownOpen); }}
                    >
                        <Image
                            src="/barsIcon.png"
                            alt="dropdown menu icon"
                            width={32}
                            height={32}
                        />
                    </div>
                    <div className="navbar-links">
                        {children}
                    </div>
                </div>
            </div>
            <div className={`mt-1 rounded w-full navbar-dropdown-menu${dropdownOpen ? " open" : ""}`}>
                <div className="ml-3 mr-3 p-1 flex w-full rounded navbar-dropdown-border">
                    {children}
                </div>
            </div>
        </nav>
    );
}
