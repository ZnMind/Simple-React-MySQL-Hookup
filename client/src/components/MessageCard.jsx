import React from 'react'
import style from './card.module.css';

const MessageCard = ({ username, message, created }) => {
    return (
        <div className={style.card}>
            <div className={style.column1}>
                <h5>{username}</h5>
            </div>
            <div className={style.column}>
                <p>{message}</p>
                <p className={style.small}>{created}</p>
            </div> 
        </div>
    )
}

export default MessageCard;