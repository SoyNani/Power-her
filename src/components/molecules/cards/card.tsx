import React from "react";
import styles from './card.module.scss'

interface CardProps {
    imageSrc: string;
    altText: string;
    title: string;
    description: any;
}

const Card: React.FC<CardProps> = ({imageSrc, altText, title, description}) => {
    return(
        <article className={styles.card}>
            <img src={imageSrc} alt={altText}/>
            <h4 className={styles.card__title}>{title}</h4>
            <p className={styles.card__text}>{description}</p>
        </article>
    )
}

export default Card;
