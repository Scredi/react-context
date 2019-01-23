import React from 'react'

const TodoItem = (props) => {
    let isComplete = props.isComplete ? 'line-through' : 'none'
    return (
        <div>
            <p style={{textDecoration: isComplete}}>{props.todo}</p>
            <button onClick={props.deleteTodo.bind(this, props.index)}>Supprimer</button>
            <button onClick={props.completeTodo.bind(this, props.index)}>{props.isComplete ? 'Modifier' : 'Valider'}</button>
        </div>
    )
}

export default TodoItem