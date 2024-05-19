import { useSelector } from 'react-redux';
import TextForm from './components/TextForm';
import { removeTodo } from './functionalities/todoSlice';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

function App() {
  var todos = useSelector(state => state.todos);
  var [todosList, setTodosList] = useState(todos);
  const dispatch = useDispatch();

  //first time the notes are fetched from the local storage
  useEffect(() =>
    {
      var todosString = localStorage.getItem('todos');
      todos = JSON.parse(todosString);
      if(todos && todos.length > 0)
        setTodosList(todos);
    }, []);

    useEffect(() => {
      if(todos && todos.length >= 0){
        setTodosList(todos);
      }
    },
    [todos])

  return (
    <>
      <div className='px-3'>
        <h1 className='bg-red-200 text-center'>Single source of truth todo list</h1>
        <br />
        <TextForm/>
        <br />
        {
          todosList.map((todo) => {
            return (
              <li key={todo.identifier} className="flex justify-between items-center">
              <span>{todo.note}</span>
              <button onClick={() => dispatch(removeTodo(todo.identifier))} className='text-red-800'>X</button>
              </li>
            );
          })
        }
      </div>
    </>
  )
}

export default App
