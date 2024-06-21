import Image from "next/image";
import Link from "next/link";

export default function Custom404() {
    return (
        <>
            <main className="m-4 flex min-h-screen flex-col items-center justify-center text-white">
                <div className="flex flex-row items-center">
                    <h1 className="text-4xl">404 - Page not found</h1>
                    <Image
                        className="ml-2"
                        src="/cat.gif"
                        alt="kitty"
                        width={64}
                        height={64}
                    />
                </div>
                <p className="text-md">
                    Return to <Link href="/" className="hover:font-bold text-white">Home</Link>
                </p>
            </main>
        </>
    );
}