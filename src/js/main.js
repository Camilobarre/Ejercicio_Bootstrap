const temaOscuro = () => {
    document.querySelector("body").setAttribute("data-bs-theme", "dark");
    document.querySelector("#dl-icon").setAttribute("class", "bi bi-sun-fill");
}

const temaClaro = () => {
    document.querySelector("body").setAttribute("data-bs-theme", "light");
    document.querySelector("#dl-icon").setAttribute("class", "bi bi-moon-fill");
}

const cambiarTema = () => {
    document.querySelector("body").getAttribute("data-bs-theme") === "light" ?
        temaOscuro() : temaClaro();
}

const nav = document.createElement("nav");
nav.innerHTML = `
    <div class="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
        <div class="container-fluid">
            <button onclick="cambiarTema()" class="btn rounded-fill"><i id="dl-icon" class="bi bi-moon-fill"></i></button>
            <a class="navbar-brand" href="#">Menú</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Features</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Pricing</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
`;
document.body.appendChild(nav);

//Posicion fija del header
window.onload = function () {
    let header = document.querySelector("header");
    header.style.position = "fixed";
    header.style.top = "0";
    header.style.width = "100%";
    header.style.zIndex = "1000";
};

const header = document.querySelector("header")

//Crear un elemento
const titulo = document.createElement("h1")
titulo.textContent = "Veterinaria RIWI"

titulo.classList.add("text-light", "text-center", "bg-dark")
header.classList.add("bg-dark")

//Agregamos un hijo
header.appendChild(titulo)

const main = document.querySelector("main");

function crearSaltoDeLinea() {
    const div = document.createElement("div");
    div.style.height = "20px";
    div.style.width = "100%";
    main.appendChild(div);
}

const primerTitulo = document.createElement("h1");
primerTitulo.textContent = "Nuestras mascotas";
primerTitulo.classList.add("text-dark", "text-center", "d-block", "mb-3");
main.appendChild(primerTitulo);
crearSaltoDeLinea();

for (let i = 0; i < mascotas.length; i++) {
    const section = document.createElement("section");
    section.classList.add("card", "text-capitalize");
    section.style.width = "18rem";
    section.innerHTML = `
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
    `;
    main.appendChild(section);
}

crearSaltoDeLinea();

const segundoTitulo = document.createElement("h1");
segundoTitulo.textContent = "Adopta tu mascota";
segundoTitulo.classList.add("text-dark", "text-center", "d-block", "mb-3");
main.appendChild(segundoTitulo);

crearSaltoDeLinea();

const formulario = document.createElement("form");
formulario.innerHTML = `
    <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1">
    </div>
    <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1">
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
`;
main.appendChild(formulario);



formulario.style.marginBottom = "20px"; // También agregamos un margen inferior al formulario
main.appendChild(formulario);