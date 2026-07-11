let libros = JSON.parse(localStorage.getItem("libros")) || [];

let indiceEditar = -1;

mostrarLibros();

function guardarLibro(){

let codigo=document.getElementById("codigo").value.trim();
let titulo=document.getElementById("titulo").value.trim();
let autor=document.getElementById("autor").value.trim();
let editorial=document.getElementById("editorial").value.trim();
let anio=document.getElementById("anio").value.trim();
let categoria=document.getElementById("categoria").value.trim();
let estado=document.getElementById("estado").value;

if(
codigo===""||
titulo===""||
autor===""||
editorial===""||
anio===""||
categoria===""){
alert("Complete todos los campos");
return;
}

let existe=libros.find(function(libro){
return libro.codigo===codigo;
});

if(existe){
alert("Ya existe un libro con ese código");
return;
}

libros.push({
codigo:codigo,
titulo:titulo,
autor:autor,
editorial:editorial,
anio:anio,
categoria:categoria,
estado:estado
});

localStorage.setItem(
"libros",
JSON.stringify(libros)
);

limpiarFormulario();

mostrarLibros();

document.getElementById("mensaje").innerText=
"Libro registrado correctamente.";

}

function editarLibro(indice){

indiceEditar=indice;

let libro=libros[indice];

document.getElementById("codigo").value=libro.codigo;
document.getElementById("titulo").value=libro.titulo;
document.getElementById("autor").value=libro.autor;
document.getElementById("editorial").value=libro.editorial;
document.getElementById("anio").value=libro.anio;
document.getElementById("categoria").value=libro.categoria;
document.getElementById("estado").value=libro.estado;

document.getElementById("codigo").disabled=true;

document.getElementById("btnGuardar").style.display="none";
document.getElementById("btnActualizar").style.display="inline-block";

}

function actualizarLibro(){

let titulo=document.getElementById("titulo").value.trim();
let autor=document.getElementById("autor").value.trim();
let editorial=document.getElementById("editorial").value.trim();
let anio=document.getElementById("anio").value.trim();
let categoria=document.getElementById("categoria").value.trim();
let estado=document.getElementById("estado").value;

if(
titulo===""||
autor===""||
editorial===""||
anio===""||
categoria===""){
alert("Complete todos los campos");
return;
}

libros[indiceEditar].titulo=titulo;
libros[indiceEditar].autor=autor;
libros[indiceEditar].editorial=editorial;
libros[indiceEditar].anio=anio;
libros[indiceEditar].categoria=categoria;
libros[indiceEditar].estado=estado;

localStorage.setItem(
"libros",
JSON.stringify(libros)
);

indiceEditar=-1;

document.getElementById("codigo").disabled=false;

document.getElementById("btnGuardar").style.display="inline-block";
document.getElementById("btnActualizar").style.display="none";

limpiarFormulario();

mostrarLibros();

document.getElementById("mensaje").innerText=
"Libro actualizado correctamente.";

}

function limpiarFormulario(){

document.getElementById("codigo").value="";
document.getElementById("titulo").value="";
document.getElementById("autor").value="";
document.getElementById("editorial").value="";
document.getElementById("anio").value="";
document.getElementById("categoria").value="";
document.getElementById("estado").value="Disponible";

document.getElementById("codigo").disabled=false;

}
function eliminarLibro(indice){

let confirmar = confirm(
"¿Está seguro que desea eliminar este libro?"
);

if(!confirmar){
return;
}

libros.splice(indice,1);

localStorage.setItem(
"libros",
JSON.stringify(libros)
);

mostrarLibros();

document.getElementById("mensaje").innerText =
"Libro eliminado correctamente.";

}

function mostrarLibros(){

let tabla = document.getElementById("tablaLibros");

tabla.innerHTML = "";

document.getElementById("totalLibros").innerText =
libros.length;

libros.forEach(function(libro,indice){

let colorEstado =
libro.estado==="Disponible"
?
"green"
:
"red";

tabla.innerHTML += `

<tr>

<td>${libro.codigo}</td>

<td>${libro.titulo}</td>

<td>${libro.autor}</td>

<td>${libro.editorial}</td>

<td>${libro.anio}</td>

<td>${libro.categoria}</td>

<td style="color:${colorEstado};font-weight:bold;">
${libro.estado}
</td>

<td>

<button onclick="editarLibro(${indice})">
✏️ Editar
</button>

<button onclick="eliminarLibro(${indice})">
🗑️ Eliminar
</button>

</td>

</tr>

`;

});

}

function buscarLibro(){

let texto =
document.getElementById("buscar")
.value
.toLowerCase();

let tabla =
document.getElementById("tablaLibros");

tabla.innerHTML="";

libros.forEach(function(libro,indice){

if(

libro.codigo.toLowerCase().includes(texto)

||

libro.titulo.toLowerCase().includes(texto)

||

libro.autor.toLowerCase().includes(texto)

){

let colorEstado =
libro.estado==="Disponible"
?
"green"
:
"red";

tabla.innerHTML += `

<tr>

<td>${libro.codigo}</td>

<td>${libro.titulo}</td>

<td>${libro.autor}</td>

<td>${libro.editorial}</td>

<td>${libro.anio}</td>

<td>${libro.categoria}</td>

<td style="color:${colorEstado};font-weight:bold;">
${libro.estado}
</td>

<td>

<button onclick="editarLibro(${indice})">
✏️ Editar
</button>

<button onclick="eliminarLibro(${indice})">
🗑️ Eliminar
</button>

</td>

</tr>

`;

}

});

}
