import * as actionType from './ActionType';
import AppDispatcher from './AppDispatcher';

export const increment = (counterCaption )=>{
    AppDispatcher.dispatch({
        type:actionType.INCREMENT,
        counterCaption:counterCaption
    })
}


export const decrement = (counterCaption)=>{
    AppDispatcher.dispatch({
        type:actionType.DECREMENT,
        counterCaption:counterCaption
    })
}