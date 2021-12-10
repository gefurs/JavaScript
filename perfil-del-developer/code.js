let datosPersona = {
    nombre: "",
    edad: 0,
    ciudad: "",
    interesPorJs: "",
};

const listado = [{
        imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
        lenguajes: "HTML y CSS",
        bimestre: "1er bimestre",
    },
    {
        imgUrl: "https://image.flaticon.com/icons/png/512/919/919828.png",
        lenguajes: "Javascript",
        bimestre: "2do bimestre",
    },
    {
        imgUrl: "https://image.flaticon.com/icons/png/512/919/919851.png",
        lenguajes: "React JS",
        bimestre: "3er bimestre",
    },
];


/* -------------------------------- VARIABLES ------------------------------- */
const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');
const sobreMi = document.querySelector("#sobre-mi");

/* -------------------------------- LISTENERS ------------------------------- */
profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);

window.addEventListener("keydown", function(e) {
    if (e.key == "f") {
        sobreMi.classList.remove("oculto");
    }
});

/* -------------------------------- FUNCIONES ------------------------------- */

function obtenerDatosDelUsuario() {
    datosPersona.nombre = (prompt("Ingresá tu nombre"));
    datosPersona.edad = 2021 - parseInt(prompt("Ingresá el año en que naciste"));
    datosPersona.ciudad = (prompt("Ingresá la ciudad en la que vives"));
    datosPersona.interesPorJs = (prompt("Te interesa JavaScript?"));
}

function renderizarDatosUsuario() {
    obtenerDatosDelUsuario();
    document.querySelector("#nombre").innerHTML = datosPersona.nombre;
    document.querySelector("#edad").innerHTML = datosPersona.edad;
    document.querySelector("#ciudad").innerHTML = datosPersona.ciudad;
    document.querySelector("#javascript").innerHTML = datosPersona.interesPorJs;
}

function recorrerListadoYRenderizarTarjetas() {
    let contenedor = document.querySelector("#fila");
    for (let i = 0; i < listado.length; i++) {
        if (document.querySelectorAll(".caja").length < listado.length) {
            contenedor.innerHTML = contenedor.innerHTML + `
            <div class="caja">
        <img src="${listado[i].imgUrl}">
        <p class="lenguajes">Lenguajes: ${listado[i].lenguajes}</p>
        <p class="bimestre">Bimestre: ${listado[i].bimestre}</p>
        </div>
        `;
        }
    }
}

function alternarColorTema() {
    document.body.classList.toggle("dark");
}