const listaDeTareas = document.querySelector('#tareas')
const tareaInput = document.querySelector('#nuevaTarea')
const btnAgregar = document.querySelector('#agregarTarea')
const cuentaTareas = document.querySelector('#cuenta-tareas')
const idTareasTerminadas = document.querySelector('#tareas-terminadas')

const tareas = [
  { id: 1, nombre: 'Pasear al perro', completado: 'Finalizar', colorBotonCompletado: 'btn-primary' },
  { id: 2, nombre: 'Estudiar JS', completado: 'Finalizar', colorBotonCompletado: 'btn-primary' },
  { id: 3, nombre: 'Estudiar python', completado: 'Finalizar', colorBotonCompletado: 'btn-primary' }
]

renderTareas(tareas)

// const tareas = []
btnAgregar.addEventListener('click', () => {
  console.log('entra')
  /* Agregamos el invitado al arreglo */
  const nombreTarea = tareaInput.value
  tareas.push({ id: Date.now(), nombre: nombreTarea, completado: 'Finalizar', colorBotonCompletado: 'btn-primary'})
  tareaInput.value = ''
  /* Actualizamos la información en el HTML */
  renderTareas(tareas)
})

function borrar (id) {
  const index = tareas.findIndex((ele) => ele.id === id) /* 2.1 */
  console.log(index)
  tareas.splice(index, 1) /* 2.2 */
  renderTareas(tareas)
}

function finalizarTarea (id) {
  const index = tareas.findIndex((ele) => ele.id === id) /* 2.1 */
  console.log(index)
  tareas[index].completado = 'Finalizada'
  tareas[index].colorBotonCompletado = 'btn-success'
  renderTareas(tareas)
}

/* Actualizamos la información en el HTML */
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
  listaDeTareas.innerHTML = html
  cuentaTareas.innerHTML = objetoTareas.length
  idTareasTerminadas.innerHTML = contadorTareasFinalizadas
  console.log(tareas)
}
