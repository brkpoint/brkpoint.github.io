import { useEffect, useState, useRef } from "react"

import Image from "next/image";
import Link from "next/link";

export default function TimelineItem({ children }) {
    return (
        <div className="timeline-item">
            <div className="timeline-item-content">
                <div className="timeline-item-main flex flex-row flex-wrap justify-between items-center">
                    {children}
                </div>
                <span className="circle"></span>
            </div>
        </div>
    );
}