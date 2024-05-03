
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

const footer = document.createElement("footer");
footer.innerHTML = `
    <h6 data-bs-theme="light">© Creado por Camilo Barreneche. © 2024 Riwi Veterinaria. Todos los derechos reservados.</h6>
    </div>
    </div>
`;
document.body.appendChild(footer);

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
        <label for="exampleInputEmail1" class="form-label">Email</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
        <div id="emailHelp" class="form-text">No compartiremos tus datos.</div>
    </div>
    <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Comentarios</label>
        <input type="textarea" class="form-control" id="exampleInputPassword1">
    </div>
    <button type="submit" class="btn btn-primary">Enviar</button>
`;
main.appendChild(formulario);

formulario.style.marginBottom = "20px";
main.appendChild(formulario);