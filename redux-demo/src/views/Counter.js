import store from '../Store';
import React,{Component} from 'react';
import * as Actions from '../Actions';

const buttonStyle={
    width:"20px",
    marginRight:"10px"
}
class Counter extends Component{
    constructor(props){
        super(props);
        this.getOwnState = this.getOwnState.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onIncrement = this.onIncrement.bind(this);
        this.onDecrement = this.onDecrement.bind(this);
        this.state = this.getOwnState();
    }

    getOwnState(){
        return{
            value:store.getState()[this.props.caption]
        }
    }

    onChange(){
        this.setState({
            value:store.getState()[this.props.caption]
        })
    }

    componentDidMount(){
        store.subscribe(this.onChange);
    }

    componentWillUnmount(){
        store.unsubscribe(this.onChange)
    }
    //STORE派发action
    onIncrement(){
        store.dispatch(Actions.increment(this.props.caption));
    }
    onDecrement(){
        store.dispatch(Actions.decrement(this.props.caption));
    }

    render() {
        const value = this.state.value;
        const {caption} = this.props;
        return (
            <div>
                <button style={buttonStyle} onClick={this.onIncrement}>+</button>
                <button style={buttonStyle} onClick={this.onDecrement}>-</button>
                <span>{caption}:{value}</span>
            </div>
        )
    }
}

export default Counter;