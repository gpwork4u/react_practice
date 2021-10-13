import React, { Component } from 'react';

class Schedule extends Component {
    constructor(props) {
        super(props);
        this.create_row_input = this.create_row_input.bind(this);
        this.state = {tr_list:[]};

    }
    create_row_input() {
        let row_input = <tr><td><input type='text'></input></td><td><button></button></td></tr>;
        this.setState({tr_list:[...this.state.tr_list, row_input]});
    }
    add_row(){

    }
    render() {
        let tr_list = this.state.tr_list;
        return (
            <div>
                <table>
                    {tr_list}
                </table>
                <button onClick={this.create_row_input}>add row</button>

            </div>
        );
    }
}

export default Schedule;