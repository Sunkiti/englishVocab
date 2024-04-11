import React from 'react';
// import styles from './style.module.css';

// function Card() {
//     return (
//         <div className={styles.cardOne}>here comes the card
//         </div>
//     );
// }

// const Card = (props) => {
//     return (
//         <li>
//             <h2>{props.title}</h2>
//             <p>{props.text}</p>
//         </li>
//     )
// }
// const Card = ({ title, text }) => {
//     return (
//         <li>
//             <h2>{title}</h2>
//             <p>{text}</p>
//         </li>
//     )
// }
const Card = (props) => {
    const { title, text } = props;
    return (
        <li>
            <h2>{title}</h2>
            <p>{text}</p>
        </li>
    )
}
// export default Card;
export default Card;