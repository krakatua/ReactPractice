import logo from './logo.svg';
import './App.css';
import Modal from "./components/Modal.jsx"
import Todo from './components/Todo.jsx'
import Title from "./components/Title.jsx"
import React, {useState} from 'react'


function App() {
  const [showModal] = useState(false)






  return (
    <div>
      <Title />

      <div>
        <input type="text" onChange={(event) => {
          console.log(event.target.value)
        }} />
        <button>add todo</button>
      </div>
      <div className='todo__wrapper'>
        <Todo title="Finish Frontend Simplified"
        
        />
        <Todo title="Finish Interview Section"
        />
        <Todo title="Land a 100k Job"
        />

      </div>
      
        {false && <Modal />}
    
    </div>
  );
}

export default App;
