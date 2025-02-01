
import type { Metadata } from "next";
import "./globals.css";
import   { Header }  from "@/components/header/header"

export const metadata: Metadata = {
  title: "Portfólio",
  description: "Esse Site Mostro meu portifolio com next",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="pt-BR">
      <head>
      <meta name="format-detection" content="telephone=no, date=no, email=no, address=no"></meta>
      <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
