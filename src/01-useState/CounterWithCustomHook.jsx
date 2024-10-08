import { SimpleForm } from "../02-useEffect/SimpleForm";
import { useCounter } from "../hooks/useCounter"

export const CounterWithCustomHook = () => {

    const { counter, increment, reset, decrement } = useCounter();
    
  return (
    <>
        <h1>Counter with Hook: { counter }</h1>
        <hr/>

        < useState /> 

        <button onClick={ () => increment(2)} className="btn btn-primary">+1</button>
        <button onClick={ reset } className="btn btn-primary">reset</button>
        <button onClick={ () => decrement(2)} className="btn btn-primary">-1</button>
    </>
  )
}

