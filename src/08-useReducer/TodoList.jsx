import { TodoItem } from "./TodoItem"

export const TodoList = ({ todos = [], onDeleteTodo, onToggleTodo }) => {



  return (
    <>
    <ul className='list-group'>
        {
            todos.map( todo => (
               <TodoItem 
               key={ todo.id } 
               todo={ todo } 
               onDeleteTodo={ onDeleteTodo }
               onToggleTodo={ onToggleTodo }
               />
            ))
        }
    </ul>
    
    
    </>
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