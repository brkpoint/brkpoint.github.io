import Image from "next/image";
import Link from "next/link";

export default function Custom404() {
    return (
        <>
            <main className="m-4 text-3xl flex min-h-screen flex-col items-center justify-center text-white">
                <div className="flex flex-row items-center">
                    <p>404 - Page not found</p>
                    <Image
                        className="ml-2"
                        src="/cat.gif"
                        alt="kitty"
                        width={64}
                        height={64}
                    />
                </div>
                <Link href="/" className="hover:font-bold text-white">Home</Link>
            </main>
        </>
    );
}