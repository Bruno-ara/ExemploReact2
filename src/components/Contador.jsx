import { useState } from "react"
//dentro do return = html | fora do return = js
const Contador = () => {
    //hook - Manipula o Estado da Variavel

    const [contador, setContador] = useState(0);


    return (
        <>
            <h1>Contagem Inical: {contador}</h1>
            <button onClick={() => setContador(contador + 1)}>Aumentar</button>
            <button onClick={() => setContador(contador - 1)}>Disminui</button>
        </>
    )
}

export default Contador
