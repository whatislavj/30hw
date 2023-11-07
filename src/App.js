import './App.css';
import { useState } from 'react';
import ToDoForm from './features/ToDoForm';
import ListItem from './features/ListItem'

function App() {
  const [list, setList] = useState([])

  const addToDo = (item) => {
    setList([...list, item])
  }

  const renderToDo = list.map((item) => {
    return <ListItem title={item.title} checked={item.checked} key={item.title} />
  })

  return (
    <div className="App">
      <ToDoForm setItems={addToDo} listItems={list} />
      {renderToDo}
    </div>
  );
}

export default App;
