import { RECEIVE_REQUESTS } from '../actions/types'

const initialState = {
    requestStatus:false
}

export default(state = initialState,action = {})=>{
    switch (action.type) {
        case RECEIVE_REQUESTS:
        return {
            ...state,
            requestStatus:action.requests
        }
        default:
        return state
    }
}