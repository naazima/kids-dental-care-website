import type { Metadata } from "next";
import { Madimi_One, Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { ContactFooter } from "@/components/layout/contact-footer";
import { Footer } from "@/components/layout/footer";

const madimiOne = Madimi_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-madimi-one",
  display: "swap",
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kids Dental Care | Pediatric Dentist in Bristol, CT",
  description:
    "Kids Dental Care provides compassionate, high-quality dental care for infants, children, teens, and patients with special needs in Bristol, CT.",
  keywords: [
    "pediatric dentist",
    "Bristol",
    "children's dentistry",
    "kids dentist",
    "baby dentist",
    "dental care for kids",
  ],
  openGraph: {
    title: "Kids Dental Care | Pediatric Dentist in Bristol, CT",
    description:
      "Compassionate dental care for children in Bristol. Creating healthy smiles for happy kids.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${madimiOne.variable} ${poppins.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <ContactFooter />
        <Footer />
      </body>
    </html>
  );
}
