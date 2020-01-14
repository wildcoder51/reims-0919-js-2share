import React, { Component } from 'react';
import TodoList from './TodoList'
import './Todos.css';
import axios from 'axios';

export default class Todos extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      todos: [], 
      description: '' };
    this.removeItem = this.removeItem.bind(this)
  }

  componentDidMount(){
    axios.get('http://localhost:8000/todos')
    .then(response => 
      this.setState({
        todos: response.data
      }))    
  };
  

  addTodo(e) {
    e.preventDefault();
    if (this.state.description ===''){
      alert('Add a todo please')
    } else {
      this.setState({ todos: [ {id: this.state.todos.length, description: this.state.description}, ...this.state.todos ], description: '' });
    }
  }

  updateValue(e) {
    this.setState({ text: [e.target.value]})
  }
  removeItem(id) {
    const todos = this.state.todos.filter((todo) => {
      return todo.id !== id
    })
    this.setState({ todos })
  }
  render() {
    return(
      <div>
        <h1 className="title"> TODO LIST</h1>
        <form className="todolist" onSubmit = {(e) => this.addTodo(e)}>
          <input className="placeholder"
            type="text"
            placeholder="Add Todo"
            value={this.state.description}
            onChange={(e) => {this.updateValue(e)}}
            />
          <button className="btnAdd" type="submit">Add</button>
        </form>
        <TodoList todos={this.state.todos} removeItem={this.removeItem} />
      </div>
    );
  }
}

