import React, { useState } from 'react';
import {Button, Container, Divider, Form, Header, Segment} from 'semantic-ui-react';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';
import {Todo} from './ts';

let nextTodoId = 0;

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);


  const addTodo = (name: string, description: string) => {
    setTodos([...todos, { id: nextTodoId++, name, description }])
    console.log(nextTodoId);
  }

  const deleteTodo = (todoToRemove: Todo) => {
    setTodos(todos.filter(item => item.id != todoToRemove.id));
  }

  return (
    <Container style={{padding: 50}}>
      <Header size='large'>
        Todo App Example
      </Header>

      <TodoForm onSubmit={addTodo}/>

      <Divider />

      <Container style={{marginTop: 20}}>
        {todos.map(item =>
          <TodoItem item={item} deleteCallback={deleteTodo} />
        )}
      </Container>
    </Container>
  );
}

export default App;
