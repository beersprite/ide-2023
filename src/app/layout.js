import './globals.css';
import Footer from './components/footer/Footer';
import Starters from './components/starters/Starters';

export const metadata = {
  title: 'PokéIDEx',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Starters/>
        <Footer />
      </body>
    </html>
  );
}
