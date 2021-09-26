import React, { Component } from 'react';

class Test extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {alarm: false,
                      text:'status ok'};
        }
        handleClick() {
            let next_state = !this.state.alarm
            this.setState({alarm: next_state});
            if (next_state)
                this.setState({text:'status alarm'});
            else
                this.setState({text:'status ok'});
        }
    render() {
        let button = null;
        if (this.state.alarm)
            button = <AlarmButton onClick={this.handleClick} text='close alarm'/>;
        else
            button = <AlarmButton onClick={this.handleClick} text='alarm'/>;
        return (
            <div>
                <h1>{this.state.text}</h1>
                {button}
            </div>
        );
    }
}

function AlarmButton(props){
    return(
        <button onClick={props.onClick}>{props.text}</button>
    )
}

export default Test;