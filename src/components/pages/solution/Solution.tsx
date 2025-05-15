import styles from './Solution.module.scss'
import { SECCION_SOLUTION_TEST, SECCION_SOLUTION_TEST2, Options } from '../../../utils/VariableText';
import { Content_card_solutions } from '../../../utils/VariableText';
import Card from '../../molecules/cards/card';

const Solution: React.FC = () => {
    return(
        <>
            <section className={styles.solution}>
                <div className={styles.solution__width}>
                    <h3 className={styles.solution__title}> {SECCION_SOLUTION_TEST}<span className={styles.solution__titleDos}>{SECCION_SOLUTION_TEST2}</span> </h3>
                    <div className={styles.solution__container}>
                        <Card
                            imageSrc='https://project-power-her-images.s3.us-east-1.amazonaws.com/Inspiration.svg'
                            altText='Icono de Inspiración diaria'
                            title={Options.INSPIRATION}
                            description={Content_card_solutions.Inspiration}
                        />
                        <Card
                            imageSrc='https://project-power-her-images.s3.us-east-1.amazonaws.com/Connections.svg'
                            altText='Icono de Conexiones Significativas'
                            title={Options.CONNECTIONS}
                            description={Content_card_solutions.Connections}
                        />
                        <Card
                            imageSrc='https://project-power-her-images.s3.us-east-1.amazonaws.com/Advice.svg'
                            altText='Icono de Consejos Prácticos'
                            title={Options.ADVICE}
                            description={Content_card_solutions.Advice}
                        />
                        <Card
                            imageSrc='https://project-power-her-images.s3.us-east-1.amazonaws.com/Events.svg'
                            altText='Icono de Eventos y Recursos Exclusivos'
                            title={Options.EVENTS}
                            description={Content_card_solutions.Events}
                        />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Solution;