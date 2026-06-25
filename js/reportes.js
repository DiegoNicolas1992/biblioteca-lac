let socios =
JSON.parse(localStorage.getItem("socios")) || [];

let libros =
JSON.parse(localStorage.getItem("libros")) || [];

let prestamos =
JSON.parse(localStorage.getItem("prestamos")) || [];

document.getElementById("totalSocios").innerText =
socios.length;

document.getElementById("totalLibros").innerText =
libros.length;

document.getElementById("totalPrestamos").innerText =
prestamos.length;

let tablaSocios =
document.getElementById("listaSocios");

socios.forEach(function(socio){

tablaSocios.innerHTML += `
<tr>
<td>${socio.dni}</td>
<td>${socio.nombre}</td>
<td>${socio.apellido}</td>
</tr>
`;

});

let tablaLibros =
document.getElementById("listaLibros");

libros.forEach(function(libro){

tablaLibros.innerHTML += `
<tr>
<td>${libro.codigo}</td>
<td>${libro.titulo}</td>
<td>${libro.autor}</td>
</tr>
`;

});

let tablaPrestamos =
document.getElementById("listaPrestamos");

prestamos.forEach(function(prestamo){

tablaPrestamos.innerHTML += `
<tr>
<td>${prestamo.socio}</td>
<td>${prestamo.libro}</td>
<td>${prestamo.fecha}</td>
</tr>
`;

});

function limpiarDatos(){

let confirmar = confirm(
"¿Está seguro que desea eliminar todos los datos?"
);

if(confirmar){

localStorage.removeItem("socios");

localStorage.removeItem("libros");

localStorage.removeItem("prestamos");

alert(
"Base de datos limpiada correctamente"
);

location.reload();

}

}
