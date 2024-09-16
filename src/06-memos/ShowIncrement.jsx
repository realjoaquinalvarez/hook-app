
export const ShowIncrement = ({ increment }) => {

    console.log('OTRA VEZ ME GENERÉ LPM :(')
    
    return (
        <button
            className="btn btn-primary"
            onClick={() => {
                increment();
            }}
        >
            Incrementar
        </button>
    )
}
