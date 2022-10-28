const listaDeTareas = document.querySelector('#tareas')
const tareaInput = document.querySelector('#nuevaTarea')
const btnAgregar = document.querySelector('#agregarTarea')
const cuentaTareas = document.querySelector('#cuenta-tareas')

const tareas = []
btnAgregar.addEventListener('click', () => {
  console.log('entra')
  /* Agregamos el invitado al arreglo */
  const nombreTarea = tareaInput.value
  tareas.push({ id: Date.now(), nombre: nombreTarea })
  tareaInput.value = ''
  /* Actualizamos la información en el HTML */
  renderInvitados()
})

function borrar (id) {
  const index = tareas.findIndex((ele) => ele.id === id) /* 2.1 */
  tareas.splice(index, 1) /* 2.2 */
  renderInvitados()
}

/* Actualizamos la información en el HTML */
function renderInvitados () {
  let html = ''
  for (const value of tareas) {
    html += `<ul class="list-group list-group-horizontal row">
              <li class="list-group-item col">${value.id} </li>
              <li class="list-group-item col">${value.nombre} </li>
              <li class="list-group-item col"> 
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                    <label class="form-check-label" for="flexCheckDefault">
                      Tarea terminada
                    </label>
                  </div>
              </li>
              <li class="list-group-item col">
               <button onclick="borrar(${value.id})" class="btn btn-danger" type="button" id="button-addon2">Eliminar</button>
              </li>
            </ul>`
    // `<li>${value.nombre} <input type="checkbox" id="cbox1" value="first_checkbox"> <button
    // onclick="borrar(${value.id})"> x </button> </li>`
  }
  listaDeTareas.innerHTML = html
  cuentaTareas.innerHTML = tareas.length
}
