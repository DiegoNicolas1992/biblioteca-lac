let socios = JSON.parse(localStorage.getItem("socios")) || [];
let libros = JSON.parse(localStorage.getItem("libros")) || [];
let prestamos = JSON.parse(localStorage.getItem("prestamos")) || [];

// ===== ESTADÍSTICAS =====

document.getElementById("cantSocios").innerText =
socios.length;

document.getElementById("cantLibros").innerText =
libros.length;

let prestamosActivos = prestamos.filter(function(p){
return p.estado === "Prestado";
});

document.getElementById("cantPrestamos").innerText =
prestamosActivos.length;

let disponibles = libros.filter(function(l){
return l.estado === "Disponible";
});

document.getElementById("cantDisponibles").innerText =
disponibles.length;

// ===== TABLA DE SOCIOS =====

let tablaSocios =
document.getElementById("listaSocios");

tablaSocios.innerHTML = "";

socios.forEach(function(socio){

let estado = socio.estado || "Activo";

let color =
estado === "Activo"
?
"green"
:
"red";

tablaSocios.innerHTML += `

<tr>

<td>${socio.dni}</td>

<td>${socio.nombre}</td>

<td>${socio.apellido}</td>

<td style="color:${color};font-weight:bold;">

${estado}

</td>

</tr>

`;

});

// ===== TABLA DE LIBROS =====

let tablaLibros =
document.getElementById("listaLibros");

tablaLibros.innerHTML = "";

libros.forEach(function(libro){

let color =
libro.estado === "Disponible"
?
"green"
:
"red";

tablaLibros.innerHTML += `

<tr>

<td>${libro.codigo}</td>

<td>${libro.titulo}</td>

<td>${libro.autor}</td>

<td style="color:${color};font-weight:bold;">

${libro.estado}

</td>

</tr>

`;

});

// ===== TABLA DE PRÉSTAMOS =====

let tablaPrestamos =
document.getElementById("listaPrestamos");

tablaPrestamos.innerHTML = "";

prestamos.forEach(function(prestamo){

let color =
prestamo.estado === "Prestado"
?
"red"
:
"green";

tablaPrestamos.innerHTML += `

<tr>

<td>${prestamo.nombre}</td>

<td>${prestamo.titulo}</td>

<td>${prestamo.fechaPrestamo}</td>

<td>${prestamo.fechaDevolucion}</td>

<td style="color:${color};font-weight:bold;">

${prestamo.estado}

</td>

</tr>

`;

});
