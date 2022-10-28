const listaDeTareas = document.querySelector('#tareas')
const tareaInput = document.querySelector('#nuevaTarea')
const btnAgregar = document.querySelector('#agregarTarea')
const cuentaTareas = document.querySelector('#cuenta-tareas')

const tareas = [
  { id: Date.now(), nombre: 'Pasear al perro', completado: false },
  { id: Date.now(), nombre: 'Estudiar JS', completado: false },
  { id: Date.now(), nombre: 'Estudiar python', completado: false }
]

renderTareas(tareas)

// const tareas = []
btnAgregar.addEventListener('click', () => {
  console.log('entra')
  /* Agregamos el invitado al arreglo */
  const nombreTarea = tareaInput.value
  tareas.push({ id: Date.now(), nombre: nombreTarea, completado: false })
  tareaInput.value = ''
  /* Actualizamos la información en el HTML */
  renderTareas(tareas)
})

function borrar (id) {
  const index = tareas.findIndex((ele) => ele.id === id) /* 2.1 */
  tareas.splice(index, 1) /* 2.2 */
  renderTareas(tareas)
}

/* Actualizamos la información en el HTML */
function renderTareas (objetoTareas) {
  let html = ''
  for (const value of objetoTareas) {
    html += `<ul class="list-group list-group-horizontal row">
              <li class="list-group-item col">${value.id} </li>
              <li class="list-group-item col">${value.nombre} </li>
              <li class="list-group-item col"> 
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                    <label class="form-check-label" for="flexCheckDefault">
                      Tarea terminada
                      ${value.completado}
                    </label>
                  </div>
              </li>
              <li class="list-group-item col">
               <button onclick="borrar(${value.id})" class="btn btn-danger" type="button" id="button-addon2">Eliminar</button>
              </li>
            </ul>`
  }
  listaDeTareas.innerHTML = html
  cuentaTareas.innerHTML = objetoTareas.length
}
