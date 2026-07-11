let socios = JSON.parse(localStorage.getItem("socios")) || [];

let indiceEditar = -1;

mostrarSocios();

function guardarSocio(){

let dni = document.getElementById("dni").value.trim();
let nombre = document.getElementById("nombre").value.trim();
let apellido = document.getElementById("apellido").value.trim();
let telefono = document.getElementById("telefono").value.trim();
let email = document.getElementById("email").value.trim();
let domicilio = document.getElementById("domicilio").value.trim();

if(
dni===""||
nombre===""||
apellido===""||
telefono===""||
email===""||
domicilio===""){
alert("Complete todos los campos");
return;
}

let existe = socios.find(function(socio){
return socio.dni===dni;
});

if(existe){
alert("Ya existe un socio con ese DNI");
return;
}

socios.push({
dni:dni,
nombre:nombre,
apellido:apellido,
telefono:telefono,
email:email,
domicilio:domicilio
});

localStorage.setItem(
"socios",
JSON.stringify(socios)
);

limpiarFormulario();

mostrarSocios();

document.getElementById("mensaje").innerText =
"Socio registrado correctamente.";

}

function editarSocio(indice){

indiceEditar=indice;

let socio=socios[indice];

document.getElementById("dni").value=socio.dni;
document.getElementById("nombre").value=socio.nombre;
document.getElementById("apellido").value=socio.apellido;
document.getElementById("telefono").value=socio.telefono;
document.getElementById("email").value=socio.email;
document.getElementById("domicilio").value=socio.domicilio;

document.getElementById("dni").disabled=true;

document.getElementById("btnGuardar").style.display="none";

document.getElementById("btnActualizar").style.display="inline-block";

}

function actualizarSocio(){

let nombre=document.getElementById("nombre").value.trim();

let apellido=document.getElementById("apellido").value.trim();

let telefono=document.getElementById("telefono").value.trim();

let email=document.getElementById("email").value.trim();

let domicilio=document.getElementById("domicilio").value.trim();

if(
nombre===""||
apellido===""||
telefono===""||
email===""||
domicilio===""){
alert("Complete todos los campos");
return;
}

socios[indiceEditar].nombre=nombre;
socios[indiceEditar].apellido=apellido;
socios[indiceEditar].telefono=telefono;
socios[indiceEditar].email=email;
socios[indiceEditar].domicilio=domicilio;

localStorage.setItem(
"socios",
JSON.stringify(socios)
);

indiceEditar=-1;

document.getElementById("dni").disabled=false;

document.getElementById("btnGuardar").style.display="inline-block";

document.getElementById("btnActualizar").style.display="none";

limpiarFormulario();

mostrarSocios();

document.getElementById("mensaje").innerText=
"Socio actualizado correctamente.";

}

function limpiarFormulario(){

document.getElementById("dni").value="";
document.getElementById("nombre").value="";
document.getElementById("apellido").value="";
document.getElementById("telefono").value="";
document.getElementById("email").value="";
document.getElementById("domicilio").value="";

document.getElementById("dni").disabled=false;

}
function eliminarSocio(indice){

let confirmar=confirm(
"¿Está seguro que desea eliminar este socio?"
);

if(!confirmar){
return;
}

socios.splice(indice,1);

localStorage.setItem(
"socios",
JSON.stringify(socios)
);

mostrarSocios();

document.getElementById("mensaje").innerText=
"Socio eliminado correctamente.";

}

function mostrarSocios(){

let tabla=document.getElementById("tablaSocios");

tabla.innerHTML="";

document.getElementById("totalSocios").innerText=
socios.length;

socios.forEach(function(socio,indice){

tabla.innerHTML+=`

<tr>

<td>${socio.dni}</td>

<td>${socio.nombre}</td>

<td>${socio.apellido}</td>

<td>${socio.telefono}</td>

<td>${socio.email}</td>

<td>${socio.domicilio}</td>

<td>

<button onclick="editarSocio(${indice})">
✏️ Editar
</button>

<button onclick="eliminarSocio(${indice})">
🗑 Eliminar
</button>

</td>

</tr>

`;

});

}

function buscarSocio(){

let texto=document
.getElementById("buscar")
.value
.toLowerCase();

let tabla=document.getElementById("tablaSocios");

tabla.innerHTML="";

socios.forEach(function(socio,indice){

if(

socio.dni.toLowerCase().includes(texto)||

socio.nombre.toLowerCase().includes(texto)||

socio.apellido.toLowerCase().includes(texto)

){

tabla.innerHTML+=`

<tr>

<td>${socio.dni}</td>

<td>${socio.nombre}</td>

<td>${socio.apellido}</td>

<td>${socio.telefono}</td>

<td>${socio.email}</td>

<td>${socio.domicilio}</td>

<td>

<button onclick="editarSocio(${indice})">
✏️ Editar
</button>

<button onclick="eliminarSocio(${indice})">
🗑 Eliminar
</button>

</td>

</tr>

`;

}

});

}
