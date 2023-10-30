import './globals.css';
import Footer from './components/footer/Footer';
import Starters from './components/starters/Starters';
import Sobre from './components/sobre/Sobre';

export const metadata = {
  title: 'PokéIDEx',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Starters/>
        <Sobre/>
        <Footer />
      </body>
    </html>
  );
}
