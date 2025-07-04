import "./global.css"
import { RootProvider } from "fumadocs-ui/provider"
import { Inter } from "next/font/google"
import Script from "next/script"
import type { ReactNode } from "react"

const inter = Inter({
  subsets: ["latin"],
})

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <head>
        <Script 
          src="https://cdn.jsdelivr.net/pyodide/v0.27.0/full/pyodide.js"
          strategy="beforeInteractive"
        />
      </head>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  )
}
