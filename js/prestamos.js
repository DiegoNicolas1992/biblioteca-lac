let prestamos = JSON.parse(localStorage.getItem("prestamos")) || [];
let socios = JSON.parse(localStorage.getItem("socios")) || [];
let libros = JSON.parse(localStorage.getItem("libros")) || [];

mostrarPrestamos();
cargarSocios();
cargarLibros();

function cargarSocios(){

let select=document.getElementById("dni");

select.innerHTML=
'<option value="">Seleccione un socio</option>';

socios.forEach(function(socio){

select.innerHTML+=`

<option value="${socio.dni}">

${socio.nombre} ${socio.apellido} - DNI ${socio.dni}

</option>

`;

});

}

function cargarLibros(){

let select=document.getElementById("codigo");

select.innerHTML=
'<option value="">Seleccione un libro</option>';

libros.forEach(function(libro){

if(libro.estado==="Disponible"){

select.innerHTML+=`

<option value="${libro.codigo}">

${libro.codigo} - ${libro.titulo}

</option>

`;

}

});

}

function guardarPrestamo(){

let dni=document.getElementById("dni").value;

let codigo=document.getElementById("codigo").value;

let fechaPrestamo=
document.getElementById("fechaPrestamo").value;

let fechaDevolucion=
document.getElementById("fechaDevolucion").value;

if(

dni===""||

codigo===""||

fechaPrestamo===""||

fechaDevolucion===""

){

alert("Complete todos los campos.");

return;

}

let socio=

socios.find(function(s){

return s.dni===dni;

});

if(!socio){

alert("El socio no existe.");

return;

}

let libro=

libros.find(function(l){

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

dni:libro ? dni : "",

nombre:socio.nombre+" "+socio.apellido,

codigo:codigo,

titulo:libro.titulo,

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

limpiarFormulario();

mostrarPrestamos();

cargarLibros();

document.getElementById("mensaje").innerText=

"Préstamo registrado correctamente.";

}

function limpiarFormulario(){

document.getElementById("dni").selectedIndex=0;

document.getElementById("codigo").selectedIndex=0;

}

function devolverLibro(indice){

let confirmar = confirm(
"¿Desea registrar la devolución del libro?"
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

cargarLibros();

document.getElementById("mensaje").innerText=
"Libro devuelto correctamente.";

}

function mostrarPrestamos(){

let tabla=document.getElementById("tablaPrestamos");

tabla.innerHTML="";

let activos=0;

prestamos.forEach(function(prestamo,indice){

if(prestamo.estado==="Prestado"){
activos++;
}

let color=
prestamo.estado==="Prestado"
?
"red"
:
"green";

tabla.innerHTML+=`

<tr>

<td>${prestamo.nombre}</td>

<td>${prestamo.titulo}</td>

<td>${prestamo.fechaPrestamo}</td>

<td>${prestamo.fechaDevolucion}</td>

<td style="color:${color};font-weight:bold;">

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

document.getElementById("totalPrestamos").innerText=
activos;

}

function buscarPrestamo(){

let texto=document
.getElementById("buscar")
.value
.toLowerCase();

let tabla=document.getElementById("tablaPrestamos");

tabla.innerHTML="";

prestamos.forEach(function(prestamo,indice){

if(

prestamo.nombre.toLowerCase().includes(texto)

||

prestamo.titulo.toLowerCase().includes(texto)

){

let color=
prestamo.estado==="Prestado"
?
"red"
:
"green";

tabla.innerHTML+=`

<tr>

<td>${prestamo.nombre}</td>

<td>${prestamo.titulo}</td>

<td>${prestamo.fechaPrestamo}</td>

<td>${prestamo.fechaDevolucion}</td>

<td style="color:${color};font-weight:bold;">

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
