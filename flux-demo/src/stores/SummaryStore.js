import AppDispatcher from '../AppDispatcher';
import {EventEmitter} from 'events';
import CounterStore from './CounterStore';
import * as ActionType from '../ActionType';

const CHANGE_EVENT = "changed";

function computeSummary(counterValues){
    let summary = 0;

    for(const key in counterValues){
        if(counterValues.hasOwnProperty(key)){
            summary+=counterValues[key];
        }
    }
    return summary;
}
const SummaryStore = Object.assign({},EventEmitter.prototype,{
    emitChange:function(){
        this.emit(CHANGE_EVENT);
    },
    addChangeListener:function(callback){
        this.on(CHANGE_EVENT,callback);
    },
    removeChangeListener:function(callback){
        this.remove(CHANGE_EVENT,callback);
    },
    getSummary:function(){
        return computeSummary(CounterStore.getCounterValues());
    }
})

SummaryStore.dispatchToken = AppDispatcher.register((action)=>{
    if((action.type == ActionType.INCREMENT)||
        (action.type==ActionType.DECREMENT)
    ){
        AppDispatcher.waitFor([CounterStore.dispatchToken]);
        SummaryStore.emitChange();
    }
})

export default SummaryStore;