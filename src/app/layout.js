import { Inter } from "next/font/google";
import 'overlayscrollbars/overlayscrollbars.css';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Aleksander",
  description: "Welcome to my page!!",
  openGraph: {
    images: ["https://images.weserv.nl/?url=avatars.githubusercontent.com/u/88441414&mask=circle&w=32"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-overlayscrollbars-initialize className="min-h-screen">
      <head>
        <link rel="icon" href="https://images.weserv.nl/?url=avatars.githubusercontent.com/u/88441414&mask=circle" sizes="any"/>
      </head>
      <body data-overlayscrollbars-initialize className={`${inter.className} flex flex-col font-mono h-full`}>
        {children}
      </body>
    </html>
  );
}
