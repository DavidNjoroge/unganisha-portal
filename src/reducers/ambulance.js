import { RECEIVE_AMBULANCE } from '../actions/types'

const initialState = {
    ambulances:[]
}

export default(state = initialState,action = {})=>{
    switch (action.type) {
        case RECEIVE_AMBULANCE:
        return {
            ...state,
            ambulances:action.payload
        }
        default:
        return state
    }
}