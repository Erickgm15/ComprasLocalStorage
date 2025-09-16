import { crearHeader } from"./Seccionheader/header.js";


function seccion (){

   let seccion = document.createElement('section');


  
document.body.appendChild(crearHeader());

return seccion;

}

   
document.body.appendChild(seccion());