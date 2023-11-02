import Footer from './components/footer/Footer';
import Inicio from './components/Inicio';
import Starters from './components/starters/Starters';
import Sobre from './components/sobre/Sobre';
import Navbar from './components/navbar/navbar.js';
import OurForm from './components/form/form.js';

export default function Home() {
  return (
    <>
      <Navbar id="navbar"/> 
      <Inicio id="inicio" />
      <Starters id="starters" />
      <Sobre id="sobre" />
      <OurForm id="form" />
      <Footer id="footer" />
    </>
  );
}
