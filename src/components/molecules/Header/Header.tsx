import styles from './Header.module.scss';
import AButtons from '../../atoms/AButtons/AButtons';

const Header: React.FC = () => {
    return(
        <header className={styles.header}>
            <p className={styles.header__logo}>PowerHer</p>
            <nav className={styles.header__nav}>
                <AButtons label="Descargar" onClick={() => alert("Inicio")} variant="secondary" />
                <AButtons label="Comuidad" onClick={() => alert("Servicios")} variant="secondary" />
                <AButtons label="¿Quiénes somos?" onClick={() => alert("Sobre Nosotros")} variant="secondary" />
                <AButtons label="Iniciar Sesión" onClick={() => alert("Contacto")} variant="primary" />
                <AButtons label="Crear cuenta" onClick={() => alert("Login")} variant="primary" />
            </nav>
        </header>
    )
};

export default Header;