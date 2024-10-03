import SiderbarAdmin from "@/components/SidebarAdmin";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import "../globals.css";
const inter = Inter({ subsets: ["vietnamese"] });
import { Inter } from "next/font/google";
import HeaderAdmin from "@/components/Header/HeaderAdmin";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s ',
    default: 'MobiTech | Admin'
  },
  description: 'Được tạo bởi Được Duy',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className}`}>
        <div className="flex min-h-screen w-full flex-col bg-muted/40">
          <TooltipProvider>
            <SiderbarAdmin />
            <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
              <HeaderAdmin />
              {children}
            </div>
          </TooltipProvider>
        </div>
      </body>
    </html>
  );
}
