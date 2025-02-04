import CONSTANTS from '../constants';
const {ACTIONS: {MESSAGES_LOAD_SUCCESS,MESSAGES_LOAD_ERROR,ADD_NEW_MESSAGE,DELETE_MESSAGE}} = CONSTANTS

function messageReducer(state,action){
    switch(action.type){
        case MESSAGES_LOAD_SUCCESS: {
            const {payload: {comments}} = action // action.payload.comments
            return {
                ...state,
                messages: comments,
                isLoading: false,
                error: null
            }
        }
        case MESSAGES_LOAD_ERROR: {
            const {payload: {error}} = action
            return {
                ...state,
                error,
                isLoading: false
            }
        }
        case ADD_NEW_MESSAGE:{
            const {payload: newMessage} = action
                const newMessageArray = [...state.messages,newMessage]
                return {
                    ...state,
                    messages: newMessageArray
                }
        }
        case DELETE_MESSAGE: {
            const {payload: deleteMessageId}= action
            const filteredMessages = state.messages
            .filter(currentMessage=>currentMessage.id !== deleteMessageId)

            return {
                ...state,
                messages: filteredMessages
            }
        }
        default: return state
    }
}

export default messageReducer