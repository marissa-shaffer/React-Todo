import React from 'react';
import TodoList from './components/TodoList.js';
import TodoForm from './components/TodoForm.js';
import "./components/Todo.css"

const Todos = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      todos: Todos 
    }
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

addTodo = (e, todo) => {
  e.preventDefault();

  const newTodo= {
    task: todo,
    id: Date.now(),
    completed: false,
  };

  this.setState({
    Todos: [...this.state.Todos, newTodo]
  });
};

toggleTodo= todoId => {
  console.log(todoId);

  this.setState({
    todos: this.state.todos.map(todo => {
      if(todoId === todo.id) {
        return {
          ...todo,
          completed: !todo.completed
        };
      }
      return todo;
    })
  })
}

clearCompleted = e => {
  e.preventDefault();
  this.setState({
    todos: this.state.todos.filter(todo => !todo.completed)
  });
};

  render() {
    console.log("rendering...");
    return (
      <div className="App">
        <div className="header">
          <h1>To Do List:</h1>
          <TodoForm addTodo={this.addTodo} />
        </div>
        <TodoList
          todos={this.state.todos}
          toggleTodo={this.toggleTodo}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
