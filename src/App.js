import { useState } from 'react';
import './App.css';

function App() {
  const  [todos, setTodos] = useState([]);
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleCreate = () => {
    setTodos([
      ...todos,
      {
        "content": value
      }
    ])
    setValue('');
  };

  return (
    <div className="container">
      <div className='input-box'>
        <input type="text" value={value} onChange={handleChange}/>
        <button onClick={handleCreate}>추가하기</button>
      </div>
      <h1 className='title'>Todo List</h1>
      <div className='card-box'>
        {todos.map((todo, idx) => {
          return (
            <div className='todo-card' key={idx}>
              {todo.content}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
