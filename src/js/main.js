const header = document.querySelector("header")

//Crear un elemento
const titulo = document.createElement("h1")
console.log(titulo);

titulo.textContent = "Galería de Perritos"

//Dos formas de crear un id en Título
// titulo.setAttribute("id","titulo-principal")
titulo.id = "titulo-principal"
titulo.style.color = "blue"
// titulo.style="color:blue"

titulo.classList.add("text-light", "text-center", "bg-dark", "p-2")
header.classList.add("pe-5")
header.classList.add("bg-success")

// titulo.classList.add("text-center")
// titulo.classList.add("bg-dark")

//Removemos pe-5
header.classList.remove("pe-5")

//Agregamos un hijo
header.appendChild(titulo)

const main = document.querySelector("main")

for (let i = 0; i < mascotas.length; i++) {
    main.innerHTML += `
    <section class="card text-capitalize" style="width: 18rem;">
        <div class="card-body">
            <h3 class="card-title text-start text-sm-center">${mascotas[i].nombre}</h3>
            <img src="${mascotas[i].imagen}" class="card-img-top" alt="${mascotas[i].raza}">
            <span class="fw-bold">Raza:</span> <span>${mascotas[i].raza}</span><br>
            <span class="fw-bold">Edad:</span> <span>${mascotas[i].edad + " años"}</span>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quibusdam accusantium odio, id fugiat
                modi
            </p>
            <div class="d-flex justify-content-center">
            <button class="btn btn-primary" type="button">Adóptame</button>
            </div>
        </div>
    </section>
    `
}