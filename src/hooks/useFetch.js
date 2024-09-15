import { useEffect, useState } from "react"

export const useFetch = ( url ) => {

    const [state, setState] = useState({
        data: null, 
        inLoading: true,
        hasError: false,
        error: null,
    })

    useEffect(() => {
        getFectch()
        

    }, [url])

    const setLoadingState = () => {
        setState({
            data: null, 
            isLoading: true,
            hasError: false,
            error: null,
        })
    }

    const getFectch = async() => {

        setLoadingState();
        const resp = await fetch(url);
        
        await new Promise( resolve => setTimeout(resolve, 1500) );
        
        if ( !resp.ok ){
            setState({
                data: null,
                isLoading: false,
                hasError: true,
                error: {
                    code: resp.status,
                    massage: resp.statusText,
                }
            })
            return;
        }

        const data = await resp.json()
        setState({
            data: data,
            isLoading: false,
            hasError: false,
        });


        console.log({data});


    }

    
    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError,
    }

}
