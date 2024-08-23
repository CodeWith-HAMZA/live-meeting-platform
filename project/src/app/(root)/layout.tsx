import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./../globals.css";

const inter = Inter({ subsets: ["latin"] });
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import Sidebar from "@/components/shared/Sidebar";
import Nav from "@/components/shared/Nav";
import StreamClientProvider from "@/providers/streamClient-provider";
import { Toast } from "@/components/ui/toast";
import { Toaster } from "sonner";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});
export const metadata: Metadata = {
  title: "Casual Meeting",
  description: "Video Streaming And Meeting Solutions",
};

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="relative">
      <StreamClientProvider>
        <Nav />
        <div className="flex">
          <Toaster theme="dark" />
          <Sidebar />
          <section
            style={{ overflowY: "scroll" }}
            className="flex flex-col h-screen flex-1 px-6 pb-6 pt-28 max-md:pb-14 sm:px-14"
          >
            <div className="w-full">{children}</div>
          </section>
        </div>
      </StreamClientProvider>
    </main>
  );
}
