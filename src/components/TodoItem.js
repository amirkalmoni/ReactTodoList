import React, { Component } from 'react'
//import PropTypes from 'prop-types'

//Component for the Object
export class TodoItem extends Component {

    getStyle = () =>{
        return{
            background:'f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through':'none'
        }
    }

   
    render() {

        //destructuring the object
        const {id , title} = this.props.todo

        return (
            <div style = {this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/> 
                    {' '}
                    { title}
                    <button onClick={this.props.delTodo.bind(this, id)} style = {btnStyle}>x</button>
                    </p>
            </div>
        )
    }
}

const btnStyle = {
    background: '#ff0000',
    color: '#fff000',
    border: 'none',
    padding: '5px 9px',
    cursor: 'pointer',
    float: 'right',
    borderRadius: '50%'
}
// check to make sure input is an object
// TodoItem.propTypes = {
//     todos: PropTypes.object.isRequired
// }

export default TodoItem
