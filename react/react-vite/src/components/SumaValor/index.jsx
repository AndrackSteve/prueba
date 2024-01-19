//  const hola =()=> console.log("hola")

import { useState } from "react"

 //se usa los corchetes destructura el objeto y mprime el nuevo valor en usestate
 const SumaValor =({DefaultValue})=>{
    const [Valor,setValor]= useState(DefaultValue)
    const suma =()=>{
        //se debe poner un funcion de usedstate para poder darle un nuevo valor a una const y se debe oner el set(y el nombre de tu const)
        setValor(Valor + 1)
    }
    return (
    <div>
        <p>{Valor}</p>
        <button onClick={suma}>suma</button>
    </div>
    )
}


export default SumaValor
//si tiene logica lleva llaves y parentesis