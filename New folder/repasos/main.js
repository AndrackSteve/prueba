

// let but = document.querySelector("#btn_carrito");

// boton.onclick()= (e) =>{
//     const bc = new BroadcastChannel("carrito");
//     bc.postMessage("anadio al carro");
//     bc.close()
// }

// const listening = new BroadcastChannell("carrito");
// listening.onmessage=(e)=> {
//     Txt.innerText + e.data;
// }

//plantillas

// un primt que pida 2 numeros y que entre esos 2 numeros va a decir cual es el menor y cual es el mayor y si son iguales  va en plantilla 
// usando quey selector y usando  inner.html


// let numero1 = prompt("anade un numero");

// let numero2 = prompt("nade otro nuemro")

// if(numero1<numero2){
//     console.log(`es menor${numero1}`)
// }if(numero1>numero2){
//     console.log(`es mayor${numero2}`)
// }


//bucle infinito pedimos numeros hasta un numero negativo y haga el promedio 


// while (true) {
//     let numeros = prompt("ingresa un numero");

//     for (let i = 0; i < numeros.length; i++) {
//     }
//     if (numeros > 0) {
//      console.log(numeros)
//     }
//     else if(numeros<0){

//     }

// };

'use strict'

//asignar variables para guardar los datos
let formulario = {
    documento: document.getElementById('n_documento'),
    nombre: document.getElementById('nombre'),
    edad: document.getElementById('edad'),
    submit: document.getElementById('Enviar')
};

//Detectar cuando se hace click

//Primero solicito traer el elemento que tiene el id de ingreso, para que addEventListener sepa cual elemento tiene que escuchar del html y no genere error de no reconocido,
//para despues ejecutar la funcion añadirPersona
document.getElementById('ingreso').addEventListener('submit', añadirPersona);



function añadirPersona() {

    //Evita que el formulario se envie y recargue la pagina
    event.preventDefault()

    //Recibir los elementos
    const datosPersonales = {

        nombre: formulario.nombre.value,

    };

    //Verificar que esten todos los datos
    if (datosPersonales.nombre != '') {


        //Crear una lista en la cual se guardan todos los usuarios
        const listaUsuarios = JSON.parse(localStorage.getItem('listaUsuarios')) || [];


        listaUsuarios.push(datosPersonales);

        localStorage.setItem("listaUsuarios", JSON.stringify(listaUsuarios));


        const lista = document.querySelector('ul');


        const elementoLista = document.createElement('li');


        elementoLista.textContent = ` Nombre: ${datosPersonales.nombre}`;



        lista.appendChild(elementoLista);



        formulario.nombre.value = '';

    } else {
        alert("Lo sentimos, eres menor de edad");
    }
}


