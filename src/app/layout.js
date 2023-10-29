import './globals.css';
import Footer from './components/footer/Footer';

export const metadata = {
  title: 'PokéIDEx',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
