async function delecteUser(user){
    let resp = await axios.delete(user)
    let data = await resp.json()
    console.log(data)
}

let postUser = async ( url, name, lastName, email) =>{
    let resp = await axios.post( url ,{
        nombre: name,
        apellido:lastName,
        correo: email
    })
    
    let data = await resp.json()

    console.log(data)
}

let putUser = async ( url, nameM, lastNameM, emailM, idM ) =>{

    let resp = await axios.put( url, {
        nombre: nameM,
        apellido:lastNameM,
        correo: emailM,
        id: idM
    })
    
    let data = await resp.json()
    console.log(data)

}

let findEmail = async ( url, email ) =>{
    let resp = await fetch(url)
    let data = await resp.json()

    let buscarCorreo=  await data.find(user => user.correo === email)
    return buscarCorreo
}


export { delecteUser, postUser, findEmail, putUser }