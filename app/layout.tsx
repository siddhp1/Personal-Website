import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const IBMPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Siddh Patel",
  description: "Personal Website",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/light/favicon-32x32.png",
        href: "/light/favicon-32x32.png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/dark/favicon-32x32.png",
        href: "/dark/favicon-32x32.png",
      },
    ],
    apple: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/light/apple-touch-icon.png",
        href: "/light/apple-touch-icon.png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/dark/apple-touch-icon.png",
        href: "/dark/apple-touch-icon.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        // doing this for now, will see if its convention later
        className={`bg-light-2 dark:bg-dark-2 min-h-screen ${IBMPlexMono.className}`}
      >
        {children}
      </body>
    </html>
  );
}
