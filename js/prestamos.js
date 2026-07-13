let prestamos = JSON.parse(localStorage.getItem("prestamos")) || [];
let socios = JSON.parse(localStorage.getItem("socios")) || [];
let libros = JSON.parse(localStorage.getItem("libros")) || [];

mostrarPrestamos();

function guardarPrestamo(){

let dni = document.getElementById("dni").value.trim();

let codigo = document.getElementById("codigo").value.trim();

let fechaPrestamo =
document.getElementById("fechaPrestamo").value;

let fechaDevolucion =
document.getElementById("fechaDevolucion").value;

if(
dni===""||
codigo===""||
fechaPrestamo===""||
fechaDevolucion===""){
alert("Complete todos los campos");
return;
}

let socio = socios.find(function(s){
return s.dni===dni;
});

if(!socio){
alert("El socio no existe.");
return;
}

let libro = libros.find(function(l){
return l.codigo===codigo;
});

if(!libro){
alert("El libro no existe.");
return;
}

if(libro.estado==="Prestado"){
alert("El libro ya se encuentra prestado.");
return;
}

prestamos.push({

dni:dni,

codigo:codigo,

fechaPrestamo:fechaPrestamo,

fechaDevolucion:fechaDevolucion,

estado:"Prestado"

});

libro.estado="Prestado";

localStorage.setItem(
"prestamos",
JSON.stringify(prestamos)
);

localStorage.setItem(
"libros",
JSON.stringify(libros)
);

mostrarPrestamos();

limpiarFormulario();

document.getElementById("mensaje").innerText=
"Préstamo registrado correctamente.";

}

function devolverLibro(indice){

let confirmar = confirm(
"¿Desea registrar la devolución?"
);

if(!confirmar){
return;
}

let codigo = prestamos[indice].codigo;

let libro = libros.find(function(l){

return l.codigo===codigo;

});

if(libro){

libro.estado="Disponible";

}

prestamos[indice].estado="Devuelto";

localStorage.setItem(
"prestamos",
JSON.stringify(prestamos)
);

localStorage.setItem(
"libros",
JSON.stringify(libros)
);

mostrarPrestamos();

document.getElementById("mensaje").innerText=
"Libro devuelto correctamente.";

}

function limpiarFormulario(){

document.getElementById("dni").value="";

document.getElementById("codigo").value="";

document.getElementById("fechaPrestamo").value="";

document.getElementById("fechaDevolucion").value="";

}
function mostrarPrestamos(){

let tabla = document.getElementById("tablaPrestamos");

tabla.innerHTML = "";

document.getElementById("totalPrestamos").innerText =
prestamos.length;

prestamos.forEach(function(prestamo,indice){

let colorEstado =
prestamo.estado==="Prestado"
?
"red"
:
"green";

tabla.innerHTML += `

<tr>

<td>${prestamo.dni}</td>

<td>${prestamo.codigo}</td>

<td>${prestamo.fechaPrestamo}</td>

<td>${prestamo.fechaDevolucion}</td>

<td style="color:${colorEstado};font-weight:bold;">
${prestamo.estado}
</td>

<td>

${
prestamo.estado==="Prestado"

?

`<button onclick="devolverLibro(${indice})">
📥 Devolver
</button>`

:

`<button disabled>
✔ Devuelto
</button>`

}

</td>

</tr>

`;

});

}

function buscarPrestamo(){

let texto = document
.getElementById("buscar")
.value
.toLowerCase();

let tabla = document.getElementById("tablaPrestamos");

tabla.innerHTML = "";

prestamos.forEach(function(prestamo,indice){

if(

prestamo.dni.toLowerCase().includes(texto)

||

prestamo.codigo.toLowerCase().includes(texto)

){

let colorEstado =
prestamo.estado==="Prestado"
?
"red"
:
"green";

tabla.innerHTML += `

<tr>

<td>${prestamo.dni}</td>

<td>${prestamo.codigo}</td>

<td>${prestamo.fechaPrestamo}</td>

<td>${prestamo.fechaDevolucion}</td>

<td style="color:${colorEstado};font-weight:bold;">
${prestamo.estado}
</td>

<td>

${
prestamo.estado==="Prestado"

?

`<button onclick="devolverLibro(${indice})">
📥 Devolver
</button>`

:

`<button disabled>
✔ Devuelto
</button>`

}

</td>

</tr>

`;

}

});

}
