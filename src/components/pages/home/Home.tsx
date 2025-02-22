import styles from './Home.module.scss';
import AButtons from '../../atoms/AButtons/AButtons';
import { HOME_SECTION_SUBTITLE } from '../../../utils/VariableText';

const Home: React.FC = () => {
    return(
        <>
            <section className={styles.home}>
                <div className={styles.home__container}>
                    <h1 className={styles. home__title}>
                        <span className={styles.home__span}>Empodera tu voz, inspira el cambio.</span> 
                        Tu historia merece ser <span className={styles.home__span}>contada.</span> 
                        ¡Publica y haz brillar tu luz 
                        en nuestra <span className={styles.home__span}>comunidad!</span>
                    </h1>
                    <h2 className={styles.home__subtitle}>{HOME_SECTION_SUBTITLE}</h2>
                    <AButtons label="Crear cuenta" onClick={() => alert("home")} variant="tertiary" />
                </div>
                <figure className={styles.fondo}>
                    <img className={styles.fondo__img} src="https://project-power-her-images.s3.us-east-1.amazonaws.com/fondo_home.svg" alt="Imágen de fondo de la página de incio " />
                </figure>
            </section>
        </>
    )
};

export default Home;