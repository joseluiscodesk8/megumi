import { Inter } from 'next/font/google';
import "./globals.css";
import dynamic from "next/dynamic";
import { nunito } from "./ui/fonts";

const DynamicLogo = dynamic(() => import('./components/Logo'));
const DynamicNavbar = dynamic(() => import('./components/Navbar'));
const DynamicFooter = dynamic(() => import('./components/Footer'));

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Megumi sushi & wok",
  description: "Megumi sushi & wok",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={nunito.className}>
        <DynamicLogo />
        <DynamicNavbar />
        {children}
        <DynamicFooter />
      </body>
    </html>
  );
}