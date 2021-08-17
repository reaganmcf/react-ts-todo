import React, { useState } from 'react';
import { Segment, Form, Button } from 'semantic-ui-react';

interface IProps {
  onSubmit: (name: string, description: string) => void;
}

const TodoForm: React.FC<IProps> = (props) => {

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleFormSubmit = () => {
    props.onSubmit(name, description);
    setName('');
    setDescription('');;
  }

  const formIsInvalid = name.trim().length == 0 || description.trim().length == 0

  return (
    <Segment>
      <Form>
        <Form.Field>
          <label>Name</label>
          <input 
            placeholder='Grocery shopping' 
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Field>

        <Form.Field>
          <label>Description</label>
          <input 
            placeholder='6 apples, dozen eggs, pretzels, ...'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Field>

        <Button disabled={formIsInvalid} type='submit' onClick={handleFormSubmit}>
          Add Todo
        </Button>
      </Form>
    </Segment>
  );
}

export default TodoForm;
