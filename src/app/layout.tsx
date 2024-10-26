import type { Metadata } from "next";
import localFont from "next/font/local";
import cn from "classnames";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default: "나의 성격 유형 알아보기",
    template: "%s | 16가지 독특한 성격 프로필",
  },
  description:
    "탐구적 모험가부터 창의적인 혁신가까지, 나의 성격 유형을 알아보고 강점과 성향을 발견해보세요.",
  keywords: [
    "성격 유형",
    "탐구적 모험가",
    "창의적인 혁신가",
    "신중한 전략가",
    "성격 특성",
    "개방성",
    "외향성",
    "성실성",
    "친화성",
    "정서적 안정",
    "자기 발견",
  ],
  authors: [{ name: "yunu.kang" }],
  openGraph: {
    type: "website",
    url: "https://kangyunu.github.io/personality-test",
    title: "나의 성격 유형 알아보기",
    description:
      "나에게 가장 잘 맞는 성격 유형을 알아보세요. 모험적인 도전자부터 조용한 관찰자까지 다양한 성향을 탐험해보세요.",
    images: [
      {
        url: "https://kangyunu.github.io/personality-test/personality-banner.jpg",
        width: 800,
        height: 600,
        alt: "16가지 성격 유형을 탐구하는 배너 이미지",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "나의 성격 유형",
    description:
      "성격 특성에 기반해 나의 성향을 이해하고 관계와 삶에서의 의미를 찾아보세요.",
    images: [
      {
        url: "https://kangyunu.github.io/personality-test/personality-banner.jpg",
        alt: "성격 유형 배너 이미지",
      },
    ],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://kangyunu.github.io/personality-test",
  },
  other: { rating: "general", language: "ko" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3821179559884674"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={cn(
          `${geistSans.variable} ${geistMono.variable} antialiased`,
          "bg-gradient-to-br from-blue-100 via-white to-purple-100"
        )}
      >
        {children}
      </body>
    </html>
  );
}
