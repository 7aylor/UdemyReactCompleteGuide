import React from 'react';
import styles from './CardInput.module.css';

const CardInput = props => {
    return (
        <div className={styles.cardInput}>
            <label>{props.label}</label>
            <input onChange={(event) => props.change(event.target.value)} type={props.type} />
        </div>
    );
}

export default CardInput;