cargarSocios();
cargarLibros();
cargarPrestamos();

function cargarSocios(){

let socios =
JSON.parse(localStorage.getItem("socios")) || [];

let tabla =
document.getElementById("listaSocios");

tabla.innerHTML = "";

for(let socio of socios){

tabla.innerHTML += `
<tr>
<td>${socio.dni}</td>
<td>${socio.nombre}</td>
<td>${socio.apellido}</td>
</tr>
`;

}

}

function cargarLibros(){

let libros =
JSON.parse(localStorage.getItem("libros")) || [];

let tabla =
document.getElementById("listaLibros");

tabla.innerHTML = "";

for(let libro of libros){

tabla.innerHTML += `
<tr>
<td>${libro.codigo}</td>
<td>${libro.titulo}</td>
<td>${libro.autor}</td>
</tr>
`;

}

}

function cargarPrestamos(){

let prestamos =
JSON.parse(localStorage.getItem("prestamos")) || [];

let tabla =
document.getElementById("listaPrestamos");

tabla.innerHTML = "";

for(let prestamo of prestamos){

tabla.innerHTML += `
<tr>
<td>${prestamo.socio}</td>
<td>${prestamo.libro}</td>
<td>${prestamo.fecha}</td>
</tr>
`;

}

}
