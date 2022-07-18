import { delecteUser, findEmail, postUser, putUser } from "./helpers/CRUD.js";

let btnGuardar = document.getElementById('btnGuardar');
let btnCorreo = document.getElementById('btnCorreo');
let btnEditar = document.getElementById('btnEditar');
let btnEliminar = document.getElementById('btnEliminar');

let formulario = document.getElementById('formulario');
const url= 'http://localhost:3000/usuarios/'

//------------Guardar----------------/
formulario.addEventListener('submit', async (e)=>{
    e.preventDefault();
    let name = document.getElementById('name').value;
    let lastName = document.getElementById('lastName').value;
    let email = document.getElementById('email').value

    postUser( url, name, lastName, email )

})

//------------Buscar----------------/
btnCorreo.addEventListener("click", async () =>{

    let email = document.getElementById('email').value
    
    console.log(email)

    let buscarCorreo= await findEmail( url, email )

    console.log(buscarCorreo)

    const {nombre, apellido, correo, id} = buscarCorreo
    document.getElementById('name').value = nombre
    document.getElementById('lastName').value = apellido
    document.getElementById('email').value = correo
// document.getElementById('id').style.display='block'
//  document.getElementById('label-edit').style.display='block'
    document.getElementById('id').value = id


})


//-------------Editar---------------/
btnEditar.addEventListener('click', async ()=>{
    let nameM = document.getElementById('name').value;
    let lastNameM = document.getElementById('lastName').value;
    let emailM = document.getElementById('email').value
    let idM= document.getElementById('id').value

    console.log(url+idM)
    
    putUser( url+idM, nameM, lastNameM, emailM, idM )
    
})


//------------Eliminar----------------/

btnEliminar.addEventListener('click', async() =>{

    let idEliminar = document.getElementById('id').value
    delecteUser(url+idEliminar)

})