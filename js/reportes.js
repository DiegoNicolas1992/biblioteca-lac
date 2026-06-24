mostrarSocios();
mostrarLibros();
mostrarPrestamos();

function mostrarSocios() {

let socios =
JSON.parse(localStorage.getItem("socios")) || [];

let html = "";

socios.forEach(s => {

html += `
<p>
${s.dni} -
${s.nombre}
${s.apellido}
</p>
`;

});

document.getElementById("listaSocios").innerHTML =
html;

}

function mostrarLibros() {

let libros =
JSON.parse(localStorage.getItem("libros")) || [];

let html = "";

libros.forEach(l => {

html += `
<p>
${l.codigo} -
${l.titulo}
</p>
`;

});

document.getElementById("listaLibros").innerHTML =
html;

}

function mostrarPrestamos() {

let prestamos =
JSON.parse(localStorage.getItem("prestamos")) || [];

let html = "";

prestamos.forEach(p => {

html += `
<p>
Socio:
${p.socio}
-
Libro:
${p.libro}
-
Fecha:
${p.fecha}
</p>
`;

});

document.getElementById("listaPrestamos").innerHTML =
html;

}
