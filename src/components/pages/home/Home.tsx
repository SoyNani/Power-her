import styles from './Home.module.scss';
import AButtons from '../../atoms/AButtons/AButtons';

const Home: React.FC = () => {
    return(
        <>
            <section className={styles.home}>
                <div className={styles.home__container}>
                    <h1 className={styles. home__title}>
                        <span className={styles.home__span}>Empodera tu voz, inspira el cambio.</span> 
                        Tu historia merece ser <span className={styles.home__span}>contada.</span> 
                        <p>¡Publica y haz brillar tu luz en nuestra <span className={styles.home__span}>comunidad!</span></p>
                    </h1>
                    
                    <div>
                        <h2 className={styles.home__subtitle}>En este espacio, tu voz tiene el poder de ser el catalizador del cambio. </h2>
                        <p>Cada historia es única, valiosa y merece ser contada.</p>
                        <p>¡Anímate a publicar y deja que tu luz brille en nuestra comunidad!</p>
                    </div>
                    
                    
                    <div className={styles.button}>
                        <AButtons label="Crear cuenta" onClick={() => alert("home")} variant="tertiary" />
                    </div>
                </div>
            </section>
        </>
    )
};

export default Home;