const boton = document.querySelector(".tema button");

function cambiarTema() {
    const tema = document.body.classList.toggle("dark");

    if (tema) {
        boton.innerHTML = '<i class="fas fa-toggle-off"></i>';
    } else {
        boton.innerHTML = '<i class="fas fa-toggle-on">';
    }
}

renderizarItems();

function renderizarItems() {
    let contenedor = document.querySelector(".contenedor");
    let nacionales;
    for (let i = 0; i < noticias.length; i++) {
        if (noticias[i].tipoNacional === true) {
            nacionales = "nacionales"
        } else if (noticias[i].tipoNacional === false) {
            nacionales = "internacionales"
        }
        contenedor.innerHTML = contenedor.innerHTML + `
        <div class="item">
            <div class="categoria">
                <h3>${nacionales}</h3>
                <p>${noticias[i].fecha}</p>
            </div>
            <img src="${noticias[i].imgUrl}" alt="${noticias[i].titulo}">
            <h2>${noticias[i].titulo}</h2>
            <p>${noticias[i].descripcion}</p>
        </div>
        `;
    }
}