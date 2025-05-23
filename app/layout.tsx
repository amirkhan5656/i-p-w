import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ihtesham | Turning Ideas Into Digital Reality",
  description:
    "I create professional websites and digital solutions that help businesses connect with their audience and achieve their goals.",
    keywords: [
      "Web Developer",
      "Portfolio",
      "Ihtesham",
      "React",
      "Next.js",
      "Full Stack Developer",
      "Tailwind CSS",
      "Typescript",
      "Supabase",
      "NeonDB",
      "Digital Creator",
      "Frontend Developer",
      "Hire Web Developer",
      "Hire Full Stack Developer",
    ],
    authors: [
      {
        name: "Ihtesham",
        url: "https://i-p-w.vercel.app"
      }
    ],
    creator: "Ihtesham",
    publisher: "Ihtesham",
    metadataBase: new URL("https://i-p-w.vercel.app"),
    openGraph: {
      title: "Ihtesham | Web Developer Portfolio",
      description:
        "I create professional websites and digital solutions that help businesses connect with their audience and achieve their goals.",
        url: "https://i-p-w.vercel.app",
        siteName: "Ihtesham Portfolio",
        images: [
          {
            url: "https://i-p-w.vercel.app/opengraph-image.webp",
            width: 1200,
            height: 630,
            alt: "Ihtesham Web Developer Portfolio Preview",
          }
        ],
        locale: "en-US",
        type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Ihtesham | Web Developer Portfolio",
      description: 
        "I create professional websites and digital solutions that help businesses connect with their audience and achieve their goals.",
      site: "@ihtesham", // optional
      creator: "@ihtesham", // optional
      images: [
        {
          url: "https://i-p-w.vercel.app/opengraph-image.webp",
          width: 1200,
          height: 630,
          alt: "Ihtesham Web Developer Portfolio Preview",
        }
      ]
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      }
    },
    icons: {
      icon: "/favicon.ico",
      apple: "/apple-touch-icon.png",
      shortcut: "/favicon-32x32.png",
    },

}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} antialiased `}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <TooltipProvider delayDuration={0}>
            <Navbar />
            {children}
            <Footer/>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
