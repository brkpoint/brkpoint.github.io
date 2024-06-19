import { Inter } from "next/font/google";
import 'overlayscrollbars/overlayscrollbars.css';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Aleksander",
  openGraph: {
    title: "Aleksander",
    description: "Welcome to my page!!",
    images: ["https://images.weserv.nl/?url=avatars.githubusercontent.com/u/88441414&mask=circle"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full" data-overlayscrollbars-initialize>
      <head>
        <link rel="icon" href="https://images.weserv.nl/?url=avatars.githubusercontent.com/u/88441414&mask=circle" sizes="any"/>
      </head>
      <body className={`${inter.className} flex flex-col font-mono h-full`} data-overlayscrollbars-initialize>
        {children}
      </body>
    </html>
  );
}
