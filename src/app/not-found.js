import Image from "next/image";

export default function Custom404() {
    return (
        <>
            <main className="m-4 text-3xl flex min-h-screen flex-row items-center justify-center">
                <p>404 - Page not found</p>
                <Image
                    className="ml-2"
                    src="/cat.gif"
                    alt="kitty"
                    width={64}
                    height={64}
                />
            </main>
        </>
    );
}