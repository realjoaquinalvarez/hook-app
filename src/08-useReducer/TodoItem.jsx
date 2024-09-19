
export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }) => {
  return (
    <li className='list-group-item d-flex justify-content-between'>
        <span 
        className={`align-self-center ${ todo.done && 'text-decoration-line-through' }`}
        onClick={ () => onToggleTodo( todo.id )}
        >
        { todo.description }
        </span>
        <button 
        className='btn btn-danger'
        onClick={ () => onDeleteTodo( todo.id ) }
        >Borrar</button>
    </li>
  )
}

// const initialState = [
//   {
//       id: new Date().getTime(),
//       description: 'Recolectar la piedra del alma',
//       done: false,
//   },
//   {
//       id: new Date().getTime() * 3,
//       description: 'Recolectar la piedra del tiempo',
//       done: false,
//   },
// ]