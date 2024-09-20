import { useEffect, useReducer } from 'react'
import { todoReducer } from './TodoReducer'
import { TodoList } from './TodoList'
import { TodoAdd } from './TodoAdd'

const initialState = [
    // {
    //     id: new Date().getTime(),
    //     description: 'Recolectar la piedra del alma',
    //     done: false,
    // },
   
]

const init = () => {
    return JSON.parse( localStorage.getItem('todos') || [])
}


export const TodoApp = () => {


    const { todos, handleDeleteTodo, handleToggleTodo, handleNewTodo } = useTodos({})

    const [ todos , dispatch] = useReducer( todoReducer, initialState, init )

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify( todos ))

    }, [todos])
    

    const handleNewTodo = ( todo ) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }

        dispatch( action )
    }

    const handleDeleteTodo = ( id ) => {
        dispatch({
            type: '[TODO] Remove Todo',
            payload: id
        })
    }
    
    const handleToggleTodo = ( id ) => {
        console.log({ id })
        dispatch({
            type: '[TODO] Toogle Todo',
            payload: id
        })
    }


    return (
        <>
            <h1>TodoApp: 10<small>pendintes: 2</small></h1>
            <hr/>

            <div className='row'>
                <div className='col-7'>
                    <TodoList 
                    todos={ todos } 
                    onDeleteTodo={ handleDeleteTodo }
                    onToggleTodo= { handleToggleTodo }
                    />
                </div>

            <div className='col-5'>
                <h4> Agregar TODO </h4>
                <hr />
                {/* TodoAdd onNewTodo( todo )*/}
                {/* { id: newDate()... , description: '', done: false } */}
                <TodoAdd onNewTodo={ handleNewTodo }/>
                {/* fin TodoAdd */}
            </div>
        </div>

        
        
        </>
    )
}
