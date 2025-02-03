import React,{ useState, useReducer, useEffect} from 'react';
import DialogList from '../DialogList/DialogList';
import Chat from '../Chat/Chat';
import MessageArea from '../MessageArea/MessageArea';
import styles from './Dashboard.module.css'
import UserContext from '../../contexts/UserContext';
import { getMessages } from '../../api';
import CONSTANTS from '../../constants';
import messageReducer from '../../reducers/messageReducer';

const {ACTIONS: {MESSAGES_LOAD_SUCCESS,MESSAGES_LOAD_ERROR,ADD_NEW_MESSAGE}} = CONSTANTS

const INITIAL_STATE = {
    messages: [],
    error: null,
    isLoading: true
}



const Dashboard = () => {
    const [user,setUser] = useState({
        id: 1,
        username: 'Main Admin 24',
        imageSrc: 'https://robohash.org/main-admin-24?set=set4'
    });

    const [state,dispatch] = useReducer(messageReducer,INITIAL_STATE)

    useEffect(()=>{
        getMessages()
        .then(messages=> dispatch({type: MESSAGES_LOAD_SUCCESS,payload: messages}))
        .catch(error=>{
            dispatch({type: MESSAGES_LOAD_ERROR,payload: error})
        })
    },[]) // componentDidMount

    const createMessage = (text)=>{
        // 1. Нужно сделайть обькт нового сообщения 
        const newMessage = {
            body: text,
            id: state.messages.length + 1,
            user
        }

        // 2. Нужно отправить этот обьект нового сообщения в state useReducer

        dispatch({
            type: ADD_NEW_MESSAGE,
            payload: newMessage
        })
    }

    return (
        <UserContext.Provider value={user}>
            <main className={styles.container}>
            <DialogList />
            <section className={styles.wrapper}>
            <Chat dashboardState={state}/>
            <MessageArea sendMessage={createMessage} />
            </section>
        </main>
        </UserContext.Provider>
    );
}

export default Dashboard;
