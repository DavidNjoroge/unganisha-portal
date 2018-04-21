import axios from "axios";
import {RECEIVE_REQUESTS,RECEIVE_AMBULANCE} from './types'

export function requestData(requests){
    return {
        type:RECEIVE_REQUESTS,
        requests
    }
}
export function ambulanceData(payload){
    return {
        type:RECEIVE_AMBULANCE,
        payload
    }
}

export function loadRequest() {
    return dispatch => {
        return {first:axios.get('http://unganisha-b.herokuapp.com/api').then(res=>{
            console.log("requests loaded",res);
            
            dispatch(requestData(res.data))
        }),
        second:axios.get('https://unganisha-b.herokuapp.com/api/ambulance').then(res=>{
            console.log("ambulance loaded",res);
            
            dispatch(ambulanceData(res.data))
        })
    }
    }
}