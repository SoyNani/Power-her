import styles from './Plans.module.scss';
import { Planes } from '../../../utils/VariableText';
import { Planes_texto } from '../../../utils/VariableText';
import { Descargar } from '../../../utils/VariableText';
import AButtons from '../../atoms/AButtons/AButtons';

const Plans: React.FC =()=> {
    return(
        <>
            <section className={styles.planes}  aria-labelledby="titulo-planes">
                <div className={styles.planes__p}>
                    <h3 className={styles.planes__primero} id="titulo-planes">{Planes_texto.primero}</h3>
                    <h3>{Planes_texto.segundo}</h3>
                </div>
                <div className={styles.contenedor}>

                    <article className={styles.contenedor__ofertas}>
                        <img src="https://project-power-her-images.s3.us-east-1.amazonaws.com/inspirationIcon.svg" alt="Inspiración diaria" />
                        <h3>{Planes.Inspiration}</h3>
                    </article>
                    <article className={styles.contenedor__ofertas}>
                        <img src="https://project-power-her-images.s3.us-east-1.amazonaws.com/AdvanceIcon.svg" alt="Consejos útiles" />
                        <h3>{Planes.Advice}</h3>
                    </article>
                    <article className={styles.contenedor__ofertas}>
                        <img src="https://project-power-her-images.s3.us-east-1.amazonaws.com/storiesIcon.svg" alt="Descubre historias" />
                        <h3>{Planes.Stories}</h3>
                    </article>
                    <article className={styles.contenedor__ofertas}>
                        <img src="https://project-power-her-images.s3.us-east-1.amazonaws.com/circleIcon.svg" alt="Círculo seguro" />
                        <h3>{Planes.Circle}</h3>
                    </article>
                    
                </div>
            </section>
            <section className={styles.descargar} aria-labelledby="titulo-descargar">
                <div className={styles.descargar__contenido}>
                    <div className={styles.descargar__texto}>
                        <h3 id="titulo-descargar">{Descargar.primero}</h3>
                        <h3 className={styles.planes__primero}>{Descargar.segundo}</h3>
                    </div>
                    <AButtons label="Descargar" onClick={() => alert("Login")} variant="primary" />
                </div>
            </section>
        </>
    )
}
export default Plans;