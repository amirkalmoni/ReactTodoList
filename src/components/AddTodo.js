import React, { Component } from 'react'

export class AddTodo extends Component {
    state = {
        title: " "
    }

    onChange = (e)=>{
        this.setState({title: e.target.value})

    }
    onSubmit = (e)=>{
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title: ' '})

    }

    render() {
        return (
            <form onSubmit = {this.onSubmit} style = {{display: 'flex'}}>
                <input type = "text" 
                    onChange = {this.onChange}
                    name = "title" 
                    placeholder = "Add todo ..."
                    style = {{flex: '10', padding: '5px'}}
                    value = {this.state.title}
                />

                <input type = "submit" 
                    value = "Submit" 
                    className = "btn" 
                    style = {{flex: '1'}}
                />
            </form>
        )
    }
}

export default AddTodo
