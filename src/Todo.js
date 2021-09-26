import React, { Component } from 'react';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.handleEnter = this.handleEnter.bind(this);
        this.state = {todo_list:[]};
        };

        handleEnter(event) {
            if (event.key === 'Enter') {
                if (event.target.value !== ''){
                    this.setState({todo_list: [...this.state.todo_list, event.target.value]});
                    event.target.value = '';
                    console.log(this.state.todo_list);
                }
            }
        }
    render() {
        let input = null;
        input = <input type="input" onKeyDown={this.handleEnter}/>;
        return (
            <div>
                <h1>Todo list</h1>
                {input}
                <h1>list</h1>
                {this.state.todo_list.map(item => (
                    <li>{item}</li>)
                )}
            </div>
        );
    }
}


export default Todo;