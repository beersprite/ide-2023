import Footer from './components/footer/Footer';
import Inicio from './components/Inicio';
import Starters from './components/starters/Starters';
import Sobre from './components/sobre/Sobre';

export default function Home() {
  return (
    <>
      <Inicio id="inicio" />
      <Starters id="starters" />
      <Sobre id="sobre" />
      <Footer id="footer" />
    </>
  );
}
