import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import WhatsAppButton from "./component/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Harsha Jasrotia",
  description: "Transforming the Real Estate Landscape through 20+ Years of Strategic Excellence.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        {/* <Footer /> */}
        <WhatsAppButton />
      </body>
    </html>
  );
}
