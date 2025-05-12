import type { Metadata } from "next";
import "./globals.css";
import { funnel, space, share, fira } from "@/lib/fonts";
import { KeyPressProvider } from "@/components/contexts/KeyPressContext";

export const metadata: Metadata = {
  title: "Why Vim?",
  description: "A simple site that introduces people unfamiliar with Vim motions to its basics.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body
        className={`${funnel.variable} ${space.variable} ${share.variable} ${fira.variable} antialiased`}
      >
        <KeyPressProvider>
          {children}
        </KeyPressProvider>
      </body>
    </html>
  );
}
