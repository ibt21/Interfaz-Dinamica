const formulario_producto_nuevo = document.querySelector("#formulario_producto_nuevo");
let productos = [];//estoy declarando un arreglo vacio
let src_imagen_producto = "../recursos/default.png";
let formulario_oculto = true;

class Producto {
    constructor(id, imagen, nombre, decripcion, precio) {
        this.Imagen = imagen;
        this.Id = id;
        this.Nombre = nombre;
        this.Descripcion = decripcion;
        this.Precio = precio;
    }
    ObtenerDatos() {
        console.log(this.Id);
        console.log(this.Imagen);
        console.log(this.Nombre);
        console.log(this.Descripcion);
        console.log(this.Precio);
    }
}
//agregar validaciones 
function AgregarProducto(event) {
    let datosFormulario = new FormData(formulario_producto_nuevo);
    //console.log(lectorFormulario);
    const datos = Object.fromEntries(datosFormulario.entries());
    console.log(datos)
    if (datos.Nombre != "" && datos.Descripcion != "" && datos.Precio != null) {
        productos.push(new Producto(productos.length + 1, src_imagen_producto, datos.Nombre, datos.Descripcion, datos.Precio));

        /*imptimir el arreglo por medio de un foreach*/
        productos.forEach(producto => {
            producto.ObtenerDatos();
        });
    }
    /*const json = JSON.stringify(datos);
    console.log(datos);**/
    mostrarProductos();
}

function obtenerImagen(event) {
    const file = event.target.files[0];
    if (file.type === "image/jpeg" || file.type === "image/png") {
        console.log(file.name);
        const lector = new FileReader();
        lector.onload = (event) => {
            src_imagen_producto = event.target.result;
            document.querySelector("#imagen-file").src = src_imagen_producto;
        }
        lector.readAsDataURL(file);
    }
}
function mostrarProductos() {
    elementos.innerHTML = "";
    productos.forEach(producto => {
        const contenedor = document.createElement("div");
        contenedor.classList.add("contenedor");

        const imagen = new Image();
        imagen.src = producto.Imagen;
        imagen.classList.add("imagen-nueva");

        const nombre = document.createElement("h2");
        nombre.textContent = producto.Nombre;

        const texto = document.createElement("p");
        texto.textContent = producto.Descripcion;

        const precio = document.createElement("h6");
        precio.textContent = producto.Precio;

        contenedor.appendChild(imagen);
        contenedor.appendChild(nombre);
        contenedor.appendChild(texto);
        contenedor.appendChild(precio);
        elementos.appendChild(contenedor);

    })

}
function ocultarForm() {
    const formulario = document.querySelector("#contenedor_formulario_producto_nuevo");
    if (!formulario_oculto) {
        formulario.style.display = "none";
        formulario_oculto =true;
    }
    else{
    formulario.style.display = "grid";
    formulario_oculto = false;
    }
}


//tiene que 