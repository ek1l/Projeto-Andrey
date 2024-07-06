import styles from './Header.module.scss';
import IMGLogo from '../../assets/logo.svg';
import IMGCarrinho from '../../assets/carrinho.svg';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.containerHeader}>
        <div className={styles.logo}>
          <img className={styles.img} src={IMGLogo} alt="Logo" />
          <h1 className={styles.rendaH1}>
            RENDA | <span className={styles.rendaSpan}>Cursos Online</span>
          </h1>
        </div>
        <div className={styles.inputAndNavigation}>
          <input type="text" className={styles.input} placeholder="Pesquisa" />
          <nav className={styles.nav}>
            <ul className={styles.ul}>
              <li className={styles.li}>
                <Link to="/">Cursos</Link>
              </li>
              <li className={styles.li}>
                <Link to="/">Sobre</Link>
              </li>
              <li className={styles.li}>
                <Link to="/">Ajuda</Link>
              </li>
            </ul>
          </nav>
          <img
            className={styles.carrinhoIMG}
            src={IMGCarrinho}
            alt="Carrinho"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
