import React from "react";
import styles from './AButtons.module.scss';

type ButtonProps = {
    label: string;
    onClick: () => void;
    variant?: "primary" | "secondary" |"tertiary";
    disabled?: boolean;
}

const AButtons: React.FC<ButtonProps> = ({label, onClick, variant = "primary", disabled = false}) =>{
    return(
        <button
            onClick={onClick}
            className={`${styles[variant]} ${disabled ? "disabled" : ""}`}
            disabled={disabled}
        >
            {label}
        </button>
    )
}

export default AButtons;

