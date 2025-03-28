import './globals.css';
import { Poppins, Manrope } from 'next/font/google';
import Footer from '@/components/layout/Footer';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-manrope',
  display: 'swap',
});

export const metadata = {
  title: 'Trendzo - Fashion Delivered in 60 Minutes',
  description: 'Your local fashion marketplace with 60-minute delivery from your favorite stores.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${manrope.variable} font-sans`}>
        <div className="min-h-screen flex flex-col">
          <main className="flex-grow pb-20">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}