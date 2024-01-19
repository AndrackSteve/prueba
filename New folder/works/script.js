'use strict'

const table = document.getElementById('table')
const api = fetch('https://jsonplaceholder.typicode.com/users')

const promesa = new Promise((res, rej) => {
    if (api != api) rej('Estas equivocado')
    else res(
        api.then((result) => result.json())
            .then(
                (data) => {
                    console.log(data)
                    // data.forEach(element => {
                    //     const newEntry = document.createElement('tr')
                    //     newEntry.innerHTML = `
                    //     <tr>
                    //         <td>${element.id}</td>
                    //         <td>${element.name}</td>
                    //        <td>${element.email}</td>
                    //         <td>${element.phone}</td>
                    //     </tr>
                    //     `
                    //     table.appendChild(newEntry)
                    // });


                     for (let i = 0; i < data.length; i++) {
                         const element = data[i];

                         const newEntry = document.createElement('tr')
                         newEntry.innerHTML = `
                         <tr>
                             <td>${data[i].id}</td>
                             <td>${data[i].name}</td>
                             <td>${data[i].email}</td>
                             <td>${data[i].phone}</td>
                         </tr>
                         `
                         table.appendChild(newEntry)
                     }
                }
            )
    )
})