import React from 'react';
import { useState, useEffect } from "react";
import styles from './style.module.css';
import { v4 as uuidv4 } from 'uuid';

const Card = (props) => {
    const { title, translate, transcription, } = props;
    const [noTranslation, Translated] = useState(false);

    useEffect(() => {
        Translated(false);
    }
        , [title]);
    const handleTranslation = () => {
        Translated(!noTranslation);
    }
    return (
        <div>
            <h2>{title}</h2>
            <p>{transcription}</p>
            {noTranslation ? <p>{translate}</p> : <button className={styles.button} onClick={handleTranslation}>show translation</button>}
        </div>
    )
}

export default Card;