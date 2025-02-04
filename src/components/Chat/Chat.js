import React, { useContext } from 'react';
import styles from './Chat.module.css'
import MessageContext from '../../contexts/MessageContext';
import ChatItem from './ChatItem';

const Chat = (props) => {
    const {messageState: {messages,error,isLoading}} = useContext(MessageContext)

    const messageCardsArray = messages.map((currentMessage)=>{
        const {body,id,user,user:{username}} = currentMessage
        return <ChatItem key={id} user={user} username={username} body={body} messageId={id}/>
    })
    return (
        <div className={styles.container}>
            {isLoading && <h1>LOADING...................</h1>}
            {error && <h1>ERROR =(=</h1>}
            {messageCardsArray}
        </div>
    );
}

export default Chat;
