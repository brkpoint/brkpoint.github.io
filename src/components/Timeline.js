import { useEffect, useState, useRef } from "react"

import Image from "next/image";
import Link from "next/link";

import TimelineItem from "./TimelineItem";

export default function Timeline({ children }) {
    return (
        <div className="timeline-container">
            {children}
        </div>
    );
}

