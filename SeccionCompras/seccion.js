import { obtenerProductos, guardarProductos } from "../Control/miLocalStorage.js";

function seccion2() {
    let contenedor = document.createElement('div');
    contenedor.className = "contenedor-compras";

    //  Título 
    let titulo = document.createElement('h2');
    titulo.className = "titulo-compras";
    titulo.innerText = "TOTAL DE COMPRAS";
    contenedor.appendChild(titulo);

    //  Total 
    let total = document.createElement('h3');
    total.className = "total-monto";
    total.innerText = "Q. 00.00";
    contenedor.appendChild(total);

    //  Subtítulo 
    let subTitulo = document.createElement('h3');
    subTitulo.className = "subtitulo-compras";
    subTitulo.innerText = "Lista de Compras";
    contenedor.appendChild(subTitulo);

    // Contenedor de cajas 
    let contEditable = document.createElement('div');
    contEditable.className = "contenedor-editables";

    let nombreEditable = document.createElement('div');
    nombreEditable.className = "editable-nombre";
    nombreEditable.setAttribute("contentEditable", "");
    nombreEditable.innerText = "Escribe nombre del producto";
    contEditable.appendChild(nombreEditable);

    let precioEditable = document.createElement('div');
    precioEditable.className = "editable-precio";
    precioEditable.setAttribute("contentEditable", "");
    precioEditable.innerText = "Escribe precio/cantidad";
    contEditable.appendChild(precioEditable);

    let botonAgregar = document.createElement('button');
    botonAgregar.className = "btn-agregar";
    botonAgregar.innerText = "Agregar";
    contEditable.appendChild(botonAgregar);

    contenedor.appendChild(contEditable);

    //  Contenedor para los productos 
    let contListaProductos = document.createElement('div');
    contListaProductos.className = "lista-productos";
    contListaProductos.id = "contenido"; 
    contenedor.appendChild(contListaProductos);


 const actualizarTotal = () => {
    const suma = obtenerProductos().reduce(
      (acc, p) => acc + (parseFloat(p.precio) || 0),
      0
    );
    total.innerText = `Q. ${suma.toFixed(2)}`;
  };
  actualizarTotal();

    // Evento botón Agregar
    botonAgregar.addEventListener('click', () => {
        let nombre = nombreEditable.innerText; 
        let precio = parseFloat(precioEditable.innerText) || 0;

        // Crear div del producto
        let item = document.createElement('div');
        item.className = "item-producto";
        item.innerText = `${nombre} - Q. ${precio.toFixed(2)}`;
        contListaProductos.appendChild(item);

        // Guardar en localStorage
        let carritoLocalStorage = obtenerProductos();
        carritoLocalStorage.push({ nombre, precio });
        guardarProductos(carritoLocalStorage);
         actualizarTotal();

     
    });
    



    return contenedor;
}

export { seccion2 };
