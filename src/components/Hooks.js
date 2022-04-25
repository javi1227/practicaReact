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
            <h1>Contamos {cuenta} obejitas</h1>
            <button onClick={handleClick}>Contar otra</button>
        </div>
    );
}
