import {useState} from "react";  /*rfc y crea la base*/
// use date nos sirve para utilizar un estado del componente
// use effect nos sirve para ir a buscar informacion por fuera y es el puente del navegador con react
export default function Hooks() {
    const [cuenta, setCuenta] = useState(0); 
    const handleClick= () =>{
        setCuenta(cuenta+1)
        
    };
    return (
        <div>
            {/* operador ternario  */}
            {cuenta === 0 ?(<h1>Arranquemos a contar a ver si nos dormimos.</h1>):(<h1>
            
            {cuenta>1 ? (<h1>Contamos {cuenta} obejitas</h1>) : 
            (<h1>Contamos {cuenta} obejita</h1>)}
            {cuenta && <h4>Que bueno a ver si nos dormimos</h4>}

            </h1>)}
            {/* operador ternario */}

            {/* <h1>Contamos {cuenta} obejitas</h1> //con ternario se va arriba */}
            <button onClick={handleClick}>Contar otra</button>
        </div>
    );
}
