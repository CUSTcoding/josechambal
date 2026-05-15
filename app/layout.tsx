import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "José Chambal | Ciência Política, Educação e Liderança",

  description:
    "José Chambal é cientista político em formação na Universidade Eduardo Mondlane (UEM), Presidente da Faculdade de Letras e Ciências Sociais (FLCS), com experiência em Recursos Humanos, docência de informática, suporte técnico e fundador do Projeto Inclusão, focado em impacto social e inclusão digital.",

  keywords: [
    "José Chambal",
    "ciência política UEM",
    "Faculdade de Letras e Ciências Sociais UEM",
    "presidente FLCS UEM",
    "Projeto Inclusão",
    "inclusão digital",
    "recursos humanos Moçambique",
    "professor de informática",
    "técnico de suporte informático",
    "técnico informático",
    "liderança estudantil",
    "impacto social Moçambique",
  ],

  authors: [{ name: "José Chambal" }],
  creator: "José Chambal",

  //metadataBase: new URL("https://seu-dominio.com"),

  openGraph: {
    title: "José Chambal | Ciência Política e Liderança Académica",
    description:
      "Perfil de liderança académica, ciência política, educação e impacto social na Universidade Eduardo Mondlane.",
    siteName: "José Chambal",
    type: "website",
    locale: "pt_PT",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "José Chambal - Ciência Política e Liderança",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "José Chambal | Ciência Política e Liderança",
    description:
      "Ciência política, educação, liderança estudantil e impacto social.",
    images: ["/opengraph-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
