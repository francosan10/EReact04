import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'

function App() {

  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState('');

  const handleInput = (e)=> {
    setNuevaTarea(e.target.value);
  }

  const handleKeyPress = (e)=> {
    if(e.key === 'Enter' && nuevaTarea.trim() !== '') {
      setTareas([...tareas, nuevaTarea.trim()]);
      setNuevaTarea('');
    }
  }

  const handleDeleteTarea = (index) => {
    const updatedTareass = [...tareas];
    updatedTareas.splice(index, 1);
    setTareas(updatedTareas);
  };

  return (
    <div className="App text-center my-5 border container">
      <h1 className='pt-4'>Bienvenido</h1>
      <h2>Ingresa tus tareas</h2>
      <input className='mt-4'
        type="text"
        placeholder="Ingrese una tarea"
        value={nuevaTarea}
        onChange={handleInput}
        onKeyPress={handleKeyPress}
      />
      <ul className='list-group py-4'>
        {tareas.map((tarea, index) => (
          <li className='list-group-item' key={index}>Tarea: {tarea}
          <button className='ms-5' onClick={()=> handleDeleteTarea(index)}>x</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
