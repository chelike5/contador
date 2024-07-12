import { useState } from "react";


function Contador(){

    const [count, setCount] = useState(0)

    const handleCount = () => {
        setCount(count + 1)
    }
    const handleReiniciar = () => {
        setCount(0)
    }

    return(
        <div className="contador-container">
            <div className="pantalla">
            <h2>{count}</h2>
            </div>
            <button onClick={handleCount}>Presionar</button>
            <button onClick={handleReiniciar}>Reiniciar</button>
        </div>
    )
}

export default Contador;