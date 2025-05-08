import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { PWARegister } from "@/components/pwa-register"
import { Inter } from "next/font/google"

// Use Inter as a close alternative to Geist
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
})

export const metadata: Metadata = {
  title: "Trefflesen",
  description: "A focused reading list application for tracking articles and resources",
  generator: "v0.dev",
  manifest: "/manifest.json",
  themeColor: "#00AAFF", // Exact color from the icon
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-slate-950 text-white font-sans">
        <PWARegister />
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  )
}
