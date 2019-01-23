import React, { Component, createContext } from 'react'

const TodoContext = createContext()

class TodoProvider extends Component {

    constructor() {
        super()

        this.state = {
            todos: [
                {
                    todo: 'Hello',
                    complete: false
                },
                {
                    todo: 'World',
                    complete: false 
                }
            ],
            todo: ''            
        }
    }

    createTodo = () => {        
        let currentTodo = { todo: this.state.todo, complete: false }
        let todos = [...this.state.todos, currentTodo]        
        this.setState({
            todos: todos,
            todo: ''
        })
    }

    completeTodo = indexToComplete => {
        let todos = this.state.todos
        todos[indexToComplete].complete = !todos[indexToComplete].complete
        this.setState({
            todos: todos
        })
    }

    deleteTodo = indexToDelete => {
        this.setState({
            todos: this.state.todos.filter((todo, index) => index !== indexToDelete)
        })
    }

    handleKeyPress = e => {
        return e.key === 'Enter' && this.createTodo()
    }

    handleInput = e => {
        this.setState({
            todo: e.target.value
        })
    }

    render() {
        return(
            <TodoContext.Provider
                value={{ 
                    todos: this.state.todos,
                    deleteTodo: this.deleteTodo,
                    createTodo: this.createTodo,
                    handleInput: this.handleInput,
                    todo: this.state.todo,
                    validateTodo: this.validateTodo,
                    handleKeyPress: this.handleKeyPress
                }}
            >
            {this.props.children}
            </TodoContext.Provider>
        )
    }
}

const TodoConsumer = TodoContext.Consumer

export { TodoProvider, TodoConsumer }