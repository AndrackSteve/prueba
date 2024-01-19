 let formulario = document.querySelector("#form_mercado");
 formulario.addEventListener("submit", function () {
     let item = document.querySelector("#producto").value;
     if (item.length >= 1) {
         localStorage.setItem(item, item);
     }
 });
 var ul = document.querySelector("#lista_mercado");
 for (var i in localStorage) {
     if (typeof localStorage[i] == "string") {
         var li = document.createElement("li");
         li.append(localStorage[i]);
         ul.appendChild(li);
     }
 }
 let formulario2 = document.querySelector("#form_borrar_mercado");
 formulario2.addEventListener("submit", function () {
     let item = document.querySelector("#producto_borrar").value;
     if (item.length >= 1) {
         localStorage.removeItem(item, item);
     }
 });



