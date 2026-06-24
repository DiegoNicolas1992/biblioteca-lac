mostrarSocios();
mostrarLibros();
mostrarPrestamos();

function mostrarSocios(){

let socios =
JSON.parse(localStorage.getItem("socios")) || [];

let html="";

socios.forEach(s=>{

html += `
<tr>
<td>${s.dni}</td>
<td>${s.nombre}</td>
<td>${s.apellido}</td>
</tr>
`;

});

document.getElementById(
"listaSocios"
).innerHTML = html;

}

function mostrarLibros(){

let libros =
JSON.parse(localStorage.getItem("libros")) || [];

let html="";

libros.forEach(l=>{

html += `
<tr>
<td>${l.codigo}</td>
<td>${l.titulo}</td>
<td>${l.autor}</td>
</tr>
`;

});

document.getElementById(
"listaLibros"
).innerHTML = html;

}

function mostrarPrestamos(){

let prestamos =
JSON.parse(localStorage.getItem("prestamos")) || [];

let html="";

prestamos.forEach(p=>{

html += `
<tr>
<td>${p.socio}</td>
<td>${p.libro}</td>
<td>${p.fecha}</td>
</tr>
`;

});

document.getElementById(
"listaPrestamos"
).innerHTML = html;

}

