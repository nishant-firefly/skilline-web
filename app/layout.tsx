import type { Metadata } from "next";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
const interFont = localFont({
  src: [
    { path: "../public/font/Inter-Thin.ttf", weight: "100" },
    { path: "../public/font/Inter-Light.ttf", weight: "200" },
    { path: "../public/font/Inter-Regular.ttf", weight: "300" },
    { path: "../public/font/Inter-Medium.ttf", weight: "400" },
    { path: "../public/font/Inter-SemiBold.ttf", weight: "600" },
    { path: "../public/font/Inter-ExtraBold.ttf", weight: "900" },
  ],
  variable: "--inter-nova-font",
});


import "./globals.css";
import { Cookies, ScrollToTop } from "@/components/core";

export const metadata: Metadata = {
  title: "Skilline - Transforming Education and Skill Development in India",
  description: "Skilline Education offers AI-driven, gamified learning solutions to enhance skills and job readiness in India. Our platform provides personalized courses, focusing on economic empowerment through upskilling and reskilling.",
  keywords: "Skill development, AI education, gamified learning, India, Atma Nirbhar Bharat, Skill India, India AI Mission",
  authors: [{ name: "Skilline Education Team" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(interFont.className)}>
        <Header />
        {children}
        <Footer />
        <Cookies />
        <ScrollToTop />
      </body>
    </html>
  );
}
