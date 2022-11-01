const idListaDeTareas = document.querySelector('#listaDeTareas')
const idTareaInput = document.querySelector('#tareaInput')
const idBtnAgregar = document.querySelector('#btnAgregar')
const idCuentaTareas = document.querySelector('#cuentaTareas')
const idTareasTerminadas = document.querySelector('#TareasTerminadas')

const tareas = [
  { id: Date.now() + 1, nombre: 'Pasear al perro', completado: 'Finalizar', colorBotonCompletado: 'btn-primary' },
  { id: Date.now() + 2, nombre: 'Estudiar JS', completado: 'Finalizar', colorBotonCompletado: 'btn-primary' },
  { id: Date.now() + 3, nombre: 'Estudiar python', completado: 'Finalizar', colorBotonCompletado: 'btn-primary' }
]

// Estado inicial
renderTareas(tareas)

idBtnAgregar.addEventListener('click', () => {
  console.log(idTareaInput.value)
  if (idTareaInput.value !== '') {
    /* Agregamos el invitado al arreglo */
    const nombreTarea = idTareaInput.value
    tareas.push({ id: Date.now(), nombre: nombreTarea, completado: 'Finalizar', colorBotonCompletado: 'btn-primary' })
    idTareaInput.value = ''
    /* Actualizamos la información en el HTML */
    renderTareas(tareas)
  } else {
    alert('Ingrese un nombre a nueva tarea')
  }
})

// eslint-disable-next-line no-unused-vars
function borrar (id) {
  const index = tareas.findIndex((ele) => ele.id === id) /* 2.1 */
  console.log(index)
  tareas.splice(index, 1) /* 2.2 */
  renderTareas(tareas)
}

// eslint-disable-next-line no-unused-vars
function finalizarTarea (id) {
  const index = tareas.findIndex((ele) => ele.id === id) /* 2.1 */
  console.log(index)
  if (tareas[index].completado === 'Finalizar') {
    tareas[index].completado = 'Finalizada'
    tareas[index].colorBotonCompletado = 'btn-success'
  } else if (tareas[index].completado === 'Finalizada') {
    tareas[index].completado = 'Finalizar'
    tareas[index].colorBotonCompletado = 'btn-primary'
  }
  renderTareas(tareas)
}

/* Se actualiza la información en el HTML */
function renderTareas (objetoTareas) {
  let html = ''
  let contadorTareasFinalizadas = 0

  for (const value of objetoTareas) {
    if (value.completado === 'Finalizada') {
      contadorTareasFinalizadas += 1
    }

    html += `<ul class="list-group list-group-horizontal row">
              <li class="list-group-item col">${value.id} </li>
              <li class="list-group-item col">${value.nombre} </li>
              <li class="list-group-item col"> 
              <button onclick="finalizarTarea(${value.id})" class="btn ${value.colorBotonCompletado}" type="button" id="button-finalizar">${value.completado}</button>
              </li>
              <li class="list-group-item col">
               <button onclick="borrar(${value.id})" class="btn btn-danger" type="button" id="button-borrar">Eliminar</button>
              </li>
            </ul>`
  }
  idListaDeTareas.innerHTML = html
  idCuentaTareas.innerHTML = objetoTareas.length
  idTareasTerminadas.innerHTML = contadorTareasFinalizadas
  console.log(tareas)
}
