//fetch

//var response = await fetch("https://jsonplaceholder.typicode.com/users");

//promesas

//fetch("https://jsonplaceholder.typicode.com/users")//llama si responde pase al then 
//.then(data=>data.jason())//se covierte en jso para poder leerlo bien
//.then(data=>console.log(data));//aca imprime la informacin en tipo json 

//investigar stack

//destructuracion de datos


//promises

 /*async function fetchExample(){
    const response =await fetch("https://jsonplaceholder.typicode.com/users");
    const json = await response.json();
    console.log( json);
}



/*function getInfon(){
    var backend = {
        nombre:"julian",
        apellido:"artega",

    };
    return new peomise((resolve,reject)=>{
        setTimeout(function(){
            var retorno = JSON.stringify(backend);
            if(typeof retorno != "string")return reject("error en string");
            return resolve(retorno);
            })
    })
    
}*/

//promises 

/*const promises = new promise(function(resolve , reject)
{
    resolve("ah sido correcto")
});*/


/*const vacas = 15;

const contarvacas = new Promise(function(resolve, reject) {
    if (vacas > 10) {
        resolve(`puedes tener ${vacas} en la granja`);
    } else {
        reject("necesitas más");
    }
});

contarvacas.then((resultado) => {
    console.log(resultado);
}).catch((error) => {
    console.error(error);
});*/

//fetch

/*const API = "https://jsonplaceholder.typicode.com/users";

function fetchData(urlAPI) {
    return fetch(urlAPI);
}

fetchData(API)
    .then(response => response.json())
    .then(users => {
        const email = users[9].email;
        console.log(email);
    })
    .catch(error => {
        console.error("Error:", error);
    });*/

   