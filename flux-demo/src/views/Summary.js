import React,{Component} from 'react';
import SummaryStore from '../stores/SummaryStore';


class Summary extends Component{
    constructor(props) {
        super(props);
        this.update = this.update.bind(this);
        this.state = {
            summary: SummaryStore.getSummary()
        }

    }
    update(){
        this.setState({
            summary:SummaryStore.getSummary()
        })
    }
    componentDidMount(){
        SummaryStore.addChangeListener(this.update);
    }

    componentWillUnMount(){
        SummaryStore.removeChangeListener(this.update);
    }

    render(){
        const summary = this.state.summary;
        return (
            <div>
                summary:{summary}
            </div>
        )
    }
}

export default Summary;