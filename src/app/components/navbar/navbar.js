import styles from './navbar.module.css';
import ScrollLink from '../utils/ScrollLink.js';

const Navbar = () => {
  return (
    <div className={styles.navbarSection}>
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
    );
};

export default Navbar;
