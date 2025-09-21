const url_api = "https://pokeapi.co/api/v2/pokemon";
/*
fetch(url_api).then(response => response.json())
.then( datos=> {
    console.log(datos)    
});


/*fetch(url_api).then(respuesta => {
    if (respuesta.ok) {
        console.log(respuesta);
        return respuesta.json();
    } else {
        throw new Error("Error en la peticion: " + respuesta.status);
    }
}).then(datos => {
    console.log(datos);
    datos.forEach(usuario => {
        console.log(usuario.name)
    })
})/*.then(datos_poke=>{
    console.log("NOMBRE:", datos_poke.name);
    console.log("ID:", datos_poke.id);
    console.log("TIPO:",datos_poke.types);
    
})*/

//esta es una versión más simplificada
function peticionAJAX(url) {
    let xhr = new XMLHttpRequest(); //abrir la conexion

    xhr.open('GET', url, true); //esto es para abrir la petición
    xhr.onload = function () {
        if (xhr.status === 200) {
            let datos = JSON.parse(xhr.responseText);
            console.log(datos);
        }else{
            console.error("Error en la peticion AJAX")
        }
    };
    xhr.send(); //hacer la petición
}

peticionAJAX(url_api);

function pokemonAJAX(url){
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    if(xhr.status === 200){
        let pokemon = JSON.parse(xhr.responseText);
        console.log(pokemon)
    }else{
        console.error("No se pudo ejecutar la conexión")
    }

}

