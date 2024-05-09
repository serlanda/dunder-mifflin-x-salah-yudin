import "~/styles/globals.css";

import { Inter } from "next/font/google";
import Navbar from "./components/navbar";
import { ClerkProvider } from '@clerk/nextjs'


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Mutlu Cocuk Tasarimi",
  description: "Created by Salah Yudin",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={`font-sans ${inter.variable}`}>
        <Navbar />
        {children}
      </body>
    </html>
    </ClerkProvider>
  );
}
