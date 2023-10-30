import { Press_Start_2P } from 'next/font/google';
import localFont from 'next/font/local';

import './globals.css';


const pixelFont = localFont({ src: '../../public/fonts/uni05_53.ttf' });

const pressStart2P = Press_Start_2P({
  weight: '400',
  preload: false,
  variable: '--font-title',
});

export const metadata = {
  title: 'PokéIDEx',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${pixelFont.className} ${pressStart2P.variable}`}>{children}</body>
    </html>
  );
}
