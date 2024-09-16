import { useReducer } from 'react'


export const TodoApp = () => {

    const [state, dispatch] = useReducer(first, second, third)
    
    
    return (
        <>
            <h1>TodoApp</h1>
            <hr/>

            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </ul>
        
        
        </>
    )
}
