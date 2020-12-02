import { Component } from 'react';
import './App.css';
import Todos from './components/Todos'
import Header from './components/layout/header'
import AddTodo from './components/AddTodo'
import About from './components/pages/About'
import React from 'react'
//import uuid from 'react-uuid'
import axios from 'axios'
import {BrowserRouter as Router, Route } from 'react-router-dom'


class App extends Component{
  //this state stores the context of the application
  state = {
    todos: []
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10').then(res => this.setState({todos: res.data}))
  }
  //checkbox toggle method
  markComplete = (id) =>{
    this.setState({todos: this.state.todos.map(todo =>{
      if(todo.id===id){
        todo.completed = !todo.completed
      }
      return todo
    })})
    }

  //delete a task method  
  delTodo = (id) =>{
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res=>this.setState({todos: [...this.state.todos.filter(todo=>todo.id!==id)]}))
  }  

  // Add a task method
  addTodo =(title) =>{
      axios.post('https://jsonplaceholder.typicode.com/todos', {title, completed: false})
      .then(res =>  this.setState({todos: [...this.state.todos, res.data]}))
    

  }

  render(){
    return(
      <Router>
        <div className = "App">
          <div className = "container">

            <Header />
            <Route exact path="/" render = {props=>(
              <div>
                <AddTodo addTodo = {this.addTodo}/>
                <Todos todos= {this.state.todos} markComplete = {this.markComplete} delTodo = {this.delTodo}/> 
              </div>
            )}/>
            
            <Route path = "/about" component = {About}/>
            

          </div>
        </div>
      </Router>
      
      
    );
  }
}
   
export default App;
