let nodoTarjeta = document.querySelector('.tarjeta');
let boton = document.querySelector("#random");


boton.addEventListener("click", function() {
    boton.setAttribute("disabled", "");

    consultarApi();
});


function consultarApi() {

    fetch('https://randomuser.me/api/')
        .then(respuesta => {
            return respuesta.json();
        })
        .then(data => {
            console.log(data);
            console.log(data.results[0]);

            renderizarDatosUsuario(data.results[0].picture.large, data.results[0].name.first, data.results[0].name.last, data.results[0].email);

            boton.removeAttribute('disabled');
        });
}


function renderizarDatosUsuario(foto, nombre, apellido, email) {
    /* -------------------------------- CONSIGNA 1 -------------------------------- */
    // Aquí deben desarrollar una función que muestre en pantalla:
    // la foto, el nombre completo del usuario y su email.
    // Esto debe estar basado en la info que nos llega desde la API e insertarse en el HTML.

    nodoTarjeta.innerHTML = `
    <div class="tarjeta">
    <img src="${foto}">
    <h3> ${nombre} ${apellido}</h3> 
    <p>${email}</p>
    </div>
    `
};


/* --------------------------- CONSIGNA 2 (extra) --------------------------- */
// Aqui pueden ir por el punto extra de utilizar el boton que se encuentra comentado en el HTML
// Pueden descomentar el código del index.html y usar ese boton para ejecutar un nuevo pedido a la API, sin necesidad de recargar la página.
// Es criterio del equipo QUÉ bloque del código debe contenerse dentro de una función para poder ser ejecutada cada vez que se escuche un click.