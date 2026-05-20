import { Inter } from 'next/font/google';
import './globals.css';
import ThemeProvider from '@/components/ThemeProvider';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata = {
  title: 'Himani studio | Fashion boutique',
  description: 'Himani studio — professional Fashion boutique services',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <ThemeProvider />
        {children}
      </body>
    </html>
  );
}
