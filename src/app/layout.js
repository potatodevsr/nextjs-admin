import { Noto_Sans, Quicksand } from "next/font/google";
import "./globals.css";

const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-noto-sans",
});

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-quicksand",
});

export const metadata = {
  title: 'ระบบเทคโนโลยีสารสนเทศเพื่อรองรับระบบการบริหารการค้าสินค้าที่ใช้ได้สองทางของไทย (e-TCWMD)',
  description: '(e-TCWMD)',
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${notoSans.variable} ${quicksand.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}