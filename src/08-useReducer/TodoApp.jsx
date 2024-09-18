import { useReducer } from 'react'
import { todoReducer } from './TodoReducer'
import { TodoList } from './TodoList'

const initialState = [
    {
        id: new Date().getTime(),
        description: 'Recolectar la priedra del alma',
        done: false,
    },
    {
        id: new Date().getTime() * 3,
        description: 'Recolectar la priedra del tiempo',
        done: false,
    },
]


export const TodoApp = () => {

    const [ todos , dispatch] = useReducer( todoReducer, initialState )

    const handleNewTodo = ( todo ) => {
        console.log({ todo })
    }
    
    
    return (
        <>
            <h1>TodoApp: 10<small>pendintes: 2</small></h1>
            <hr/>

            <div className='row'>
                <div className='col-7'>
                    <TodoList todos={ todos }/>
                </div>

            <div className='col-5'>
                <h4> Agregar TODO </h4>
                <hr />
                {/* TodoAdd onNewTodo( todo )*/}
                {/* { id: newDate()... , description: '', done: false } */}
                <form>
                    <input 
                        type='text' 
                        placeholder='¿Que hay que hacer?'
                        className='form-control'
                    />

                    <button 
                        type='submit'
                        className='btn btn-outline-primary mt-1'
                    >
                        Agregar
                    </button>
                </form>
                {/* fin TodoAdd */}
            </div>
        </div>

        
        
        </>
    )
}
