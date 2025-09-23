import { descargar } from "../Control/downland.js";

function crearHeader() {
    let header1 = document.createElement('div');
    header1.className = "div-header";
    header1.innerText = "COMPRAS ";

    // Icono de descarga
    let icono = document.createElement('img');
    icono.className = "icono-header";
    icono.id = "descargar";
    icono.src = "./assets/contenido.png";
    
    header1.appendChild(icono);

    //  descargar el contenido
    icono.addEventListener("click", () => {
        descargar("contenido"); 
    });
    return header1;
}

export { crearHeader };
