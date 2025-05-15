import React from 'react';
import styles from './AddedValue.module.scss';
import { ADDEDVALUE_PART_ONE, ADDEDVALUE_PART_TWO, ADDEDVALUE_PART_THREE, ADDEDVALUE_ICON } from '../../../utils/VariableText';
import AButtons from '../../atoms/AButtons/AButtons';

const AddedValue: React.FC =() => {
    return(
        <>
        <section className={styles.value}>
            <h3 className={styles.value__title}>
                {ADDEDVALUE_PART_ONE}
                <span>{ADDEDVALUE_PART_TWO}</span> 
                {ADDEDVALUE_PART_THREE}
            </h3>
            <div className={styles.value__context}>
                <img className={styles.value__img} src="https://project-power-her-images.s3.us-east-1.amazonaws.com/fila1-columna1.svg" alt="Imagen de una mujer haciéndose una selfie frente al espejo" />
                <img className={styles.value__img} src="https://project-power-her-images.s3.us-east-1.amazonaws.com/fila1-columna2.svg" alt="Imagen de una chica joven con vestido rosa" />
                <img className={styles.value__img} src="https://project-power-her-images.s3.us-east-1.amazonaws.com/fila1-columna3.svg" alt="Imagen de tres jóvenes en la naturaleza" />
                <img className={styles.value__img} src="https://project-power-her-images.s3.us-east-1.amazonaws.com/fila1-columna4.svg" alt="Imagen de una mujer tomándose una selfie" />
                <img className={styles.value__img} src="https://project-power-her-images.s3.us-east-1.amazonaws.com/fila1-columna5.svg" alt="Imagen de un outfit de mujer" />
                <img className={styles.value__img} src="https://project-power-her-images.s3.us-east-1.amazonaws.com/fila2-columna1.svg" alt="Imagen de una mujer en una laguna" />
                <img className={styles.value__img} src="https://project-power-her-images.s3.us-east-1.amazonaws.com/fila2-columna2.svg" alt="Imagen de una mujer haciéndose una selfie frente al espejo" />
                <img className={styles.value__img} src="https://project-power-her-images.s3.us-east-1.amazonaws.com/fila2-columna3.svg" alt="Imagen de una mujer promocionando un producto" />
                <img className={styles.value__img} src="https://project-power-her-images.s3.us-east-1.amazonaws.com/fila2-columna4.svg" alt="Imagen de los pies de una mujer con tacones" />
                <img className={styles.value__img} src="https://project-power-her-images.s3.us-east-1.amazonaws.com/fila2-columna5.svg" alt="Imagen de platos de comida" />
            </div>
        </section>
        <section className={styles.icon}>
            <div className={styles.texto}>
                <p>{ADDEDVALUE_ICON}</p>
                <AButtons label="Crear cuenta" onClick={() => alert("Login")} variant="primary" />
            </div>
        </section>
        </>
    )
}

export default AddedValue;