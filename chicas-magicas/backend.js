let chicasMagicas = [];
let chicaSeleccionada = null;

function cargarChicas() {
    const filtro = document.getElementById("filtroEstado").value;
    const tabla = document.getElementById("tablaChicas");
    tabla.innerHTML = chicasMagicas.filter(chica => !filtro || chica.estado === filtro)
        .map((chica, index) => `
        <tr>
            <td><a href="#" onclick="mostrarPerfil(${index})">${chica.nombre}</a></td>
            <td>${chica.edad}</td>
            <td>${chica.ciudad_origen}</td>
            <td>${chica.estado}</td>
            <td>${chica.fecha_contrato}</td>
            <td><button onclick="eliminarChica(${index})">Eliminar</button></td>
        </tr>
    `).join('');
}

document.getElementById("chicaForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const nuevaChica = {
        nombre: document.getElementById("nombre").value,
        edad: document.getElementById("edad").value,
        ciudad_origen: document.getElementById("ciudad").value,
        estado: document.getElementById("estado").value,
        fecha_contrato: document.getElementById("fechaContrato").value
    };
    chicasMagicas.push(nuevaChica);
    cargarChicas();
});

function eliminarChica(index) {
    chicasMagicas.splice(index, 1);
    cargarChicas();
}

function mostrarPerfil(index) {
    chicaSeleccionada = index;
    const chica = chicasMagicas[index];
    document.getElementById("perfilNombre").innerText = chica.nombre;
    document.getElementById("perfilEdad").innerText = chica.edad;
    document.getElementById("perfilCiudad").innerText = chica.ciudad_origen;
    document.getElementById("perfilEstado").value = chica.estado;
    document.getElementById("perfilFecha").innerText = chica.fecha_contrato;
    document.getElementById("perfilChica").style.display = "block";
}

function cerrarPerfil() {
    document.getElementById("perfilChica").style.display = "none";
}

function actualizarEstado() {
    if (chicaSeleccionada !== null) {
        chicasMagicas[chicaSeleccionada].estado = document.getElementById("perfilEstado").value;
        cargarChicas();
    }
}

function filtrarChicas() {
    cargarChicas();
}
