import MobileNavbar from './MobileNavbar';
import ScrollLink from '../utils/ScrollLink.js';
import styles from './navbar.module.css';

const Navbar = () => {
  return (
    <>
      <MobileNavbar className="md:hidden" />

      <div className="hidden md:block bg-darkgrey/90 sticky top-0 left-0 z-40 w-100 font-title backdrop-blur">
        <div className={styles.container}>
          <nav className={styles.navbar}>
            <ScrollLink sectionId="inicio">
              <a>Home</a>
            </ScrollLink>
            <ScrollLink sectionId="starters">
              <a>Iniciais</a>
            </ScrollLink>
            <ScrollLink sectionId="sobre">
              <a>Sobre</a>
            </ScrollLink>
            <ScrollLink sectionId="form">
              <a>Formulario</a>
            </ScrollLink>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
