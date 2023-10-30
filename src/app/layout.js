import { Press_Start_2P } from 'next/font/google';
import localFont from 'next/font/local';

import './globals.css';
<<<<<<< HEAD
import Footer from './components/footer/Footer';
import Starters from './components/starters/Starters';
import Sobre from './components/sobre/Sobre';
=======

const pixelFont = localFont({ src: '../../public/fonts/uni05_53.ttf' });

const pressStart2P = Press_Start_2P({
  weight: '400',
  preload: false,
  variable: '--font-title',
});
>>>>>>> 9c5115c0bfeb1f867450c7fcc985e0bfd84b19d8

export const metadata = {
  title: 'PokéIDEx',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
<<<<<<< HEAD
      <body>
        {children}
        <Starters/>
        <Sobre/>
        <Footer />
      </body>
=======
      <body className={`${pixelFont.className} ${pressStart2P.variable}`}>{children}</body>
>>>>>>> 9c5115c0bfeb1f867450c7fcc985e0bfd84b19d8
    </html>
  );
}
