const countries = "https://restcountries.com/v2/all";
const nodoLista = document.querySelector("ul");

fetch(countries)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
        for (let i = 0; i < data.length; i++) {
            let pais = data[i].name;
            let bandera = data[i].flags.png;
            nodoLista.innerHTML += `
            <ul>
                <p>${pais}</p>
                <img src="${bandera}">
            </ul>
            `;
        }
    })
    .catch(function(error) {
        console.log(error);
    });