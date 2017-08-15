import React,{Component} from 'react';
import Summary from './Summary';
import Counter from './Counter'
const style = {
    width:"300px",
    height:"100px",
    position:"absolute",
    top:"50%",
    left:"50%",
    marginTop:"-50px",
    marginLeft:"-50px"
};

class ControlPanel extends Component{

    render(){
        return (
            <div style = {style}>
                <Counter caption = 'First' />
                <Counter caption = 'Second' />
                <Counter caption = 'Third' />
                <hr />
                <Summary />
            </div>
        )
    }
}

export default ControlPanel;