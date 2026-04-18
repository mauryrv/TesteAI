import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: {
    default: "Controle de gado",
    template: "%s · Controle de gado",
  },
  description:
    "Gestão pecuária — animais, sanidade, reprodução, pesagens e pastos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={dmSans.variable}>
      <body
        className={`${dmSans.className} min-h-screen bg-stone-100 text-stone-900 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
