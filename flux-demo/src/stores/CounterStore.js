import {EventEmitter} from 'events';
import AppDispatcher from '../AppDispatcher';
import * as ActionType from '../ActionType';

const counterValues = {
    'First':0,
    'Second':10,
    'Third':30
};
const CHANGE_EVENT = "changed";
const CounterStore = Object.assign({},EventEmitter.prototype,{
    getCounterValues:function(){
        return counterValues;
    },
    emitChange:function(){
        this.emit(CHANGE_EVENT);
    },
    addChangeListener:function(callback){
        this.on(CHANGE_EVENT,callback);
    },
    removeChangeListener:function(callback){
        this.removeListener(CHANGE_EVENT,callback);
    }
});


//注册回调时间  所有的action 都会传递到这个回调函数
CounterStore.dispatchToken = AppDispatcher.register((action)=>{
    if(action.type === ActionType.INCREMENT){
        counterValues[action.counterCaption]++;
        CounterStore.emitChange();
    }else if(action.type === ActionType.DECREMENT){
        counterValues[action.counterCaption]--;
        CounterStore.emitChange();
    }
})

export default CounterStore;