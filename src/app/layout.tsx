// src/app/layout.tsx
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Footer } from "@/components/layout/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Entertainment Connect - つながりをプロデュースし、エンタメで日本を動かす",
  description: "エンタメ業界のDXを加速する統合プラットフォーム。DealerStudio、埋め卓くんなど、採用から集客まで幅広くサポート。",
  keywords: "エンタメ, DX, 採用管理, 集客支援, ポーカー, カジノ, イベント企画",
  openGraph: {
    title: "Entertainment Connect",
    description: "つながりをプロデュースし、エンタメで日本を動かす",
    images: ["/og-image.png"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.className} bg-white text-gray-900 antialiased`}>
        {children}
        <Footer />
      </body>
    </html>
  )
}