import { Inter } from "next/font/google";
import "./globals.css";
import 'simplebar-react/dist/simplebar.min.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Aleksander",
  description: "Welcome to my page!!",
  creator: "Aleksander",
  openGraph: {
    image: "https://avatars.githubusercontent.com/u/88441414?s=48&v=4"
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="icon" href="https://images.weserv.nl/?url=avatars.githubusercontent.com/u/88441414&mask=circle" sizes="any"/>
      </head>
      <body className={`${inter.className} flex flex-col font-mono h-full`}>
        {children}
      </body>
    </html>
  );
}
