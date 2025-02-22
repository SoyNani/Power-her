import React from "react";
import styles from './SectionText.module.scss'

interface CardProps {
    sections: string;
}

const SectionText: React.FC<CardProps> = ({sections}) => {
    return(
        <h3 className={styles.sectionText}>
            {sections.map((section, index) => (
                <span key={index} className={section.bold ? styles.solution__titleDos : ''}>
                {section.text}
              </span>
            ))}
        </h3>
    )
}

export default SectionText;
