import React from 'react';
import styles from './Chat.module.css'

const ChatItem = (props) => {
const {user,username,body} = props

    return(
        <article className={styles.msg}>
            <img src={user.imageSrc ? user.imageSrc: 'https://robohash.org/grokkosardi?set=set4'} alt={username} className={styles.useravatar}/>
            <div className={styles.wrapper}>
            <p className={styles.bold}>{username}</p>
            <p>{body}</p>
            </div>
        </article>
    )
}

export default ChatItem;
