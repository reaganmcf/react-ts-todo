import React from 'react';
import {Button, Segment} from 'semantic-ui-react';
import {Todo} from '../../ts';

interface IProps {
  item: Todo,
  deleteCallback: (t: Todo) => void;
}

const TodoItem: React.FC<IProps> = (props) => {

  const item = props.item;

  return (
    <Segment>
      <div style={{
        display: 'flex', 
        alignItems: 'center'
      }}>
        <div style={{flex: 9}}>
          <h4>{item.name}</h4>
          <p>{item.description}</p>
        </div>
        <div style={{flex: 1}}>
          <Button onClick={() => props.deleteCallback(item)}>
            delete
          </Button>
        </div>
      </div>
    </Segment>
  );
}

export default TodoItem;
