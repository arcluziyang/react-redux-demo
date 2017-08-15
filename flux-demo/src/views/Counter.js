import React,{Component} from 'react';
import CounterStore from '../stores/CounterStore';
import * as Action from '../Action';

const buttonStyle = {width:"50px"};
class Counter extends  Component{
    constructor(props){
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onClickIncrementButton = this.onClickIncrementButton.bind(this);
        this.onClickDecrementButton = this.onClickDecrementButton.bind(this);
        this.state = {
            count:CounterStore.getCounterValues()[props.caption]
        }
    }
    //store 变化  触发state change 重新渲染
    componentDidMount(){
        CounterStore.addChangeListener(this.onChange);
    }
    componentWillUnMount(){
        CounterStore.removeChangeListener(this.onChange);
    }

    onChange(){
        const newCount = CounterStore.getCounterValues()[this.props.caption];
        this.setState({
            count:newCount
        })
    }

    onClickIncrementButton(){
        Action.increment(this.props.caption);
    }

    onClickDecrementButton(){
        Action.decrement(this.props.caption);
    }

    render(){
        const {caption} = this.props;
        return (
            <div>
                <button style={buttonStyle} onClick={this.onClickIncrementButton}>+</button>
                <button style={buttonStyle} onClick = {this.onClickDecrementButton}>-</button>
            <span>
                {caption} count:{this.state.count}
            </span>
            </div>
            )
    }

}

export default Counter;