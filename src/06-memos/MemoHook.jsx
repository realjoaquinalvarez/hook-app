import { useState } from "react"
import { useCounter } from "../hooks/useCounter"


const heavyStuff = ( iterationNumber = 100 ) => {
  for( let i = 0; i< iterationNumber; i++ ) {
    console.log('Ahi vamos...')
  }

  return `${ iterationNumber }`
} 



export const MemoHook = () => {

  const { counter, increment } = useCounter( 10 )
  const [ show, setShow ] = useState(true)


  return (
    <>
        <h1>Counter: <small>{ counter }</small> </h1>
        <hr />

        <h4>{ heavyStuff( 500 ) }</h4>

        <button 
          className="btn btn-primary"
          onClick={ () => increment() }
        >
          +1
        </button>

        <button 
          className="btn btn-outline-primary"
          onClick={ () => setShow( !show )}
        >
        Show/Hide { JSON.stringify(show) }
        </button>

    </>
  )
}
