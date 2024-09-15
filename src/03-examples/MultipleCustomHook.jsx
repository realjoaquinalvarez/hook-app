import { useCounter, useFetch } from "../hooks"
import { LoadingMessage } from "./LoadingMessage"
import { PokemonCard } from "./PokemonCard"

export const MultipleCustomHook = () => {

    const { counter, decrement, increment } = useCounter(1)
    const { data, hasError, isLoading } = useFetch(`https://pokeapi.co/api/v2/pokemon/${ counter }`)    
    
    
    return (
        <>
            <h1>Informacion de Pokémon</h1>
            <hr />
        
        {
        isLoading
        ? <LoadingMessage />
        : <PokemonCard 
        id={ counter } 
        name={ data?.name } 
        />
    }
        
        

        <h2>{ data?.name }</h2>


        <button
            className="btn btn-primary mt-2"
            onClick={ () => counter > 1? decrement() : null }
        >
            Anterior
        </button>

        <button
            className="btn btn-primary mt-2"
            onClick={ () => increment() }
        >
            Siguiente
        </button>

        </>   
    )
}
