import { fireEvent, render, screen } from "@testing-library/react"
import { TodoItem } from "../../src/08-useReducer/TodoItem"

describe('Pruebas en el <TodoItem />', () => { 

    const todo = {
        id: 1,
        description: 'Piedra del Alma',
        done: false,
    }    

    const onDeleteTodoMock = jest.fn()
    const onToggleTodoMock = jest.fn()

    beforeEach( () => jest.clearAllMocks() )

    
    test('debe de mostrar el todo pendiente de completar', () => { 
        
        render( 
            <TodoItem
                todo={ todo }
                onDeleteTodo={ onDeleteTodoMock }
                onToggleTodo={ onToggleTodoMock } 
            />
        )

        const liElement = screen.getByRole('listitem')
        expect( liElement.className ).toBe('list-group-item d-flex justify-content-between')

        const spanElement = screen.getByLabelText('span')
        expect( spanElement.className ).toContain('align-self-center')
    
    })
    
    test('debe de mostrar el Todo completado', () => { 
        
        todo.done = true
        
        render( 
            <TodoItem
                todo={ todo }
                onToggleTodo={ onToggleTodoMock } 
                onDeleteTodo={ onDeleteTodoMock }
            />
        )

        const spanElement = screen.getByLabelText('span')
        expect( spanElement.className ).toContain('text-decoration-line-through')
    
    })
    
    test('debe de llamar el ToggleTodo cuando se hace click', () => { 
       
        render( 
            <TodoItem
                todo={ todo }
                onToggleTodo={ onToggleTodoMock } 
                onDeleteTodo={ onDeleteTodoMock }
            />
        )

        
        const spanElement = screen.getByLabelText('span')
        fireEvent.click( spanElement )

        expect( onToggleTodoMock ).toHaveBeenCalledWith( todo.id )

    })
    
    test('button debe de llamar el deleteTodo', () => { 
       
        render( 
            <TodoItem
                todo={ todo }
                onToggleTodo={ onToggleTodoMock } 
                onDeleteTodo={ onDeleteTodoMock }
            />
        )

        
        const deleteButton = screen.getByRole('button')
        fireEvent.click( deleteButton )

        expect( onDeleteTodoMock ).toHaveBeenCalledWith( todo.id )

    })


})