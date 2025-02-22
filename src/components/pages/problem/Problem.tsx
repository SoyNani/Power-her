import styles from './Problem.module.scss'
import { PROBLEM_TEST } from '../../../utils/VariableText';

const Problem: React.FC = () => {
    return(
        <>
            <section className={styles.problem}>
                <div className={styles.problem__container}>
                    <p className={styles.problem__texto}>{PROBLEM_TEST}</p>
                    <img className={styles.problem__img} src="https://project-power-her-images.s3.us-east-1.amazonaws.com/chicas_seccion_problema.svg" alt="Imagen de chicas con elementos tech" />
                </div>
            </section>
        </>
    )
}

export default Problem;