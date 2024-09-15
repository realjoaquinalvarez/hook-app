import { useEffect, useState } from "react"

export const useFetch = () => {

    const [state, setState] = useState({
        data: null, 
        inLoading: true,
        hasError: false,
        error: null,
    })

    useEffect(() => {
        getFectch()
        

    }, [])
    
    const getFectch = async() => {

        const resp = await fetch('https://pokeapi.co/api/v2/pokemon/ditto')
        const data = await resp.json()

        console.log({data})


    }

    
    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError,
    }

}
