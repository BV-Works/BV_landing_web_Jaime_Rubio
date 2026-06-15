import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"

/**
 * Brand fonts ported from the original site.
 * - Stara (ExtraBold/Bold) -> titles & navigation
 * - Helvetica Now Display   -> body copy
 */
const stara = localFont({
  variable: "--font-stara",
  display: "swap",
  src: [
    { path: "./fonts/Stara-Bold-BF65962709c55b4.otf", weight: "700", style: "normal" },
    { path: "./fonts/Stara-ExtraBold-BF659627090225d.otf", weight: "800", style: "normal" },
  ],
})

const helvetica = localFont({
  variable: "--font-helvetica",
  display: "swap",
  src: [
    { path: "./fonts/HelveticaNowDisplay-Light.otf", weight: "300", style: "normal" },
    { path: "./fonts/HelveticaNowDisplayRegular-5760477.ttf", weight: "400", style: "normal" },
    { path: "./fonts/HelveticaNowDisplay-Black.otf", weight: "900", style: "normal" },
  ],
})

export const metadata: Metadata = {
  title: "BV Landing Page",
  description: "Bajo Vigilancia Music & Design",
  icons: { icon: "/icons/LOGO-BV-FAVICON.svg" },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${stara.variable} ${helvetica.variable} bg-paper`}>
      <body className="flex min-h-screen flex-col bg-paper font-sans text-ink antialiased">
        {children}
      </body>
    </html>
  )
}
