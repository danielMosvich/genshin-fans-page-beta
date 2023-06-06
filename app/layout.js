import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div
          className="w-full h-20 flex justify-around px-5 items-center fixed z-20 shadow-xl shadow-zinc-200/30"
          style={{
            backgroundColor: "rgba(255,255,255,0.9)",
            backdropFilter: "blur(20px)",
          }}
        >
          <img src={"./logo.png"} alt="" style={{ height: "60%" }} />

          <div className="flex gap-3">
            <Link
              className="bg-white py-2 px-3 rounded-md text-md ring-1 ring-zinc-500/30  hover:ring-transparent hover:shadow-lg hover:shadow-blue-400/30 hover:bg-blue-400 transition-all text-zinc-500 hover:text-white"
              href={"/characters"}
            >
              Home
            </Link>
            {/* <Link
              className="bg-white py-1 px-2 rounded-md text-md ring-1 ring-zinc-500/30  hover:ring-transparent hover:shadow-lg hover:shadow-blue-400/30 hover:bg-blue-400 transition-all text-zinc-500 hover:text-white"
              href={"/characters"}
            >
              Characters
            </Link> */}
          </div>
        </div>
        <main className="pt-20">{children}</main>
      </body>
    </html>
  );
}