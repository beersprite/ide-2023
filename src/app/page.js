import Footer from './components/footer/Footer';
import Inicio from './components/Inicio';
import Navbar from './components/navbar/Navbar.js';
import OurForm from './components/form/Form.js';
import Sobre from './components/Sobre';
import Starters from './components/starters/Starters';

export default function Home() {
  return (
    <>
      <Navbar id="navbar" />
      <Inicio id="inicio" />
      <Starters id="starters" />
      <Sobre id="sobre" />
      <OurForm id="form" />
      <Footer id="footer" />
    </>
  );
}
