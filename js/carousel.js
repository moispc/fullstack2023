const obtenerDatos = async () => {
    let respuesta = await fetch('./data/comentarios.json');
    let items = await respuesta.json();
    return items
};


const cargarComentarios = async (comentarios) => {
    const comentariosContainer = document.getElementById("comentariosContainer");

    comentarios.forEach((comentario, index) => {
        const comentarioDiv = document.createElement("div");
        comentarioDiv.className = "carousel-item" + (index === 0 ? " active" : "");

        const rowDiv = document.createElement("div");
        rowDiv.className = "row";

        const colDiv = document.createElement("div");
        colDiv.className = "col-6 mx-auto";

        const comentarioElement = document.createElement("div");
        comentarioElement.className = "comentario";
        comentarioElement.textContent = comentario.comentario;


        colDiv.appendChild(comentarioElement);
        rowDiv.appendChild(colDiv);
        comentarioDiv.appendChild(rowDiv);
        comentariosContainer.appendChild(comentarioDiv);
    });
}

const obtenerComentarios = async () =>{
    let items = await obtenerDatos();
    cargarComentarios(items);
    return items
};

obtenerComentarios()