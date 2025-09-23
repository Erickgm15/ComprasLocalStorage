import { obtenerProductos, guardarProductos } from "./Control/miLocalStorage.js";
import { crearHeader } from "./Seccionheader/header.js";
import { seccion2 } from "./SeccionCompras/seccion.js";

function seccion1 (){
   let seccion = document.createElement('section');
   seccion.id = "contenido";   // aquí es donde se hace la captura

   // usar obtenerProductos()
   let listaProductos = obtenerProductos();

   if(listaProductos.length === 0){
        listaProductos = [];
        guardarProductos(listaProductos);
   }

   console.log(listaProductos);

   document.body.appendChild(crearHeader());


   seccion.appendChild(seccion2());

   return seccion;
}

document.body.appendChild(seccion1());
