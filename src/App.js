import React, { Component } from 'react';
import './App.css';
import { TodoConsumer } from './store/TodoContext'
import TodoItem from './components/TodoItem'

class App extends Component {
  render() {
    return (
      <div className="App">        
        <TodoConsumer>          
          {({ todos, deleteTodo, createTodo, todo, handleInput, completeTodo, handleKeyPress }) => (
            <div>
              <input
                onKeyPress={handleKeyPress}
                type='text'
                value={todo}
                onChange={handleInput} 
              />
              <button onClick={createTodo}>Ajouter</button>
              {
                todos.length > 0 ? 
                todos.map((item, index) => {                  
                  return (
                    <TodoItem key={index}
                      index={index}
                      isComplete={item.complete}
                      completeTodo={completeTodo}
                      todo={item.todo}
                      deleteTodo={deleteTodo}
                    />
                  )
                })
                :
                <p>Liste vide</p>
              }
            </div>
          )}
        </TodoConsumer>
      </div>
    );
  }
}

export default App;
