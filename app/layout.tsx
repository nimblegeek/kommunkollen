import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kommunkollen - Se var dina skattepengar går",
  description: "En översikt över din skatt och din kommuns budget",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv">
      <body>{children}</body>
    </html>
  );
}
