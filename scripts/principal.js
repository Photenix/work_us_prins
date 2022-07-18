let btnMarvel = document.getElementById("btnCategory1")
let btnDC = document.getElementById("btnCategory2")
let listarCard = document.getElementById("listarCard")

btnMarvel.addEventListener('click', ()=>{
    getUrl('http://localhost:3000/marvel')
})

btnDC.addEventListener('click', ()=>{
    getUrl('http://localhost:3000/dc')
})

const getUrl = async(url)=>{

    const  resp = await axios.get(url)
    const data = await resp.data
    //console.table(data)

    listarCard.innerHTML = ''

    data.forEach(heroe =>{
        const {nombre, imagen, historia}=heroe

        listarCard.innerHTML +=`
        <div class="card" style="width: 18rem;">
        <img src=${imagen} class="card-img-top" alt="...">
        <div class="card-body">
            <h1>${nombre}</h1>
          <p class="card-text">${historia}</p>
        </div>
      </div>
        `
    })
}