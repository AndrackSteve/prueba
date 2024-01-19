let tareas = [];

function agregarTarea() {
    const inputTarea = document.querySelector('#listatareas');
    const nuevaTarea = inputTarea.value.trim();
    if (nuevaTarea !== '') {
        tareas.push(nuevaTarea);
        mostrarTareas();
        inputTarea.value = '';
    }
}

function mostrarTareas() {
    const listaTareas = document.querySelector('#listatareas');
    listaTareas.innerHTML = '';
    tareas.forEach((tarea, i) => {
        const itemLista = document.createElement('li');
        itemLista.textContent = tarea;
        listaTareas.appendChild(itemLista);

        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'Eliminar';
        botonEliminar.addEventListener('click', () => eliminarTarea(indice));
        itemLista.appendChild(botonEliminar);
    });
}

function eliminarTarea(indice) {
    if (confirm('¿Estás seguro de eliminar esta tarea?')) {
        tareas.splice(indice, 1);
        mostrarTareas();
    }
}





