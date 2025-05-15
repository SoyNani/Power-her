import styles from './Plans.module.scss';
import { Descargar } from '../../../utils/VariableText';
import AButtons from '../../atoms/AButtons/AButtons';
import { useState } from 'react'

const Plans: React.FC =()=> {
    return(
        <>
            <section className={styles.descargar} aria-labelledby="titulo-descargar">
                <div className={styles.descargar__contenido}>
                    <div className={styles.descargar__texto}>
                        <h3 id="titulo-descargar">{Descargar.primero}</h3>
                        <h3 className={styles.planes__primero}>{Descargar.segundo}</h3>
                    </div>
                    <AButtons label="Descargar" onClick={() => alert("hola")} variant="primary" />
                </div>
            </section>
        </>
    )
}
export default Plans;