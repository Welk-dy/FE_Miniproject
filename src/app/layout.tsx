import type { Metadata } from "next";
import "@/app/globals.css";
import Header from "@/component/header";
import Footer from "@/component/footer";

export const metadata: Metadata = {
  title: "Home",
  description: "Twiscode Home",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen overflow-x-hidden">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}