//IMPORTACIONES
import React from "react";
import "../assets/css/HeaderLoco.css"

//EL COMPONENTE EN SI
const HeaderLoco= ()=> {
    //aca iria todo nuestro codigo JS
    let nombre= "Javier Garcia.";
    const styles = {
        p:{
            color: "white",
            backgroundColor: "orange",
            
        },
        a: {
            color: "red",
        },

        h1: {
            color: "blue",
        },
    };

    const handleMarcelo = ()=> {
        alert("Auch")
    };
    return(
        //aca esta todo lo que se ve
        <div>
            <button type="button" class="btn btn-primary" name="boton Loco" onClick={handleMarcelo}>Primary</button>

            <h1 style={styles.h1}>Hola perris. Mi nombre es {nombre} </h1>
            <p style={styles.p}>Hola soy un p con color Blanco</p>
            <a style={styles.a} href="https://www.escueladevrock.com/"> Pinchame </a>
        </div>
    );
};

//EXPORTACION DEL COMPONENTE
export default HeaderLoco;
