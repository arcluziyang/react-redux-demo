import React,{Component} from 'react';
import store from '../Store';
class Summary extends Component {
    constructor(props) {
        super(props);
        this.state = this.getOwnState();
        this.update = this.update.bind(this);
    }

    getOwnState() {
        const state = store.getState();
        let sum = 0;
        for (const key in state) {
            if (state.hasOwnProperty(key)) {
                sum += state[key];
            }
        }

        return {
            sum: sum
        }
    }

    update() {
        this.setState(this.getOwnState());
    }

    componentDidMount() {
        store.subscribe(this.update);
    }

    componentWillUnmount() {
        store.unsubscribe(this.update);
    }
    shouldComponentUpdate(nextProps,nextState){
        return nextState.sum!==this.state.sum;
    }

    render() {
        const sum = this.state.sum;
        return (
            <div>
                <span>
                    sum:{sum}
                </span>
            </div>
        )

    }

}

export default Summary;