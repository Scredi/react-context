import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { TodoConsumer } from './store/TodoContext'

class App extends Component {
  render() {
    return (
      <div className="App">        
        <TodoConsumer>          
          {({ todos, deleteTodo, createTodo, todo, handleInput, completeTodo, handleKeyPress }) => (
            <div>
              <input onKeyPress={handleKeyPress} type='text' value={todo} onChange={handleInput}/>
              <button onClick={createTodo}>Ajouter</button>
              {
                todos.map((item, index) => {
                  let isComplete = item.complete ? 'line-through' : 'none'
                  return (
                    <div key={index}>
                      <p style={{textDecoration: isComplete}}>{item.todo}</p>
                      <button onClick={deleteTodo.bind(this, index)}>Supprimer</button>
                      <button onClick={completeTodo.bind(this, index)}>Valider</button>
                    </div>
                  )
                })
              }
            </div>
          )}
        </TodoConsumer>
      </div>
    );
  }
}

export default App;
