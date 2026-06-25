function ingresar() {

let usuario =
document.getElementById("usuario");

let password =
document.getElementById("password");

if(usuario === null){
alert("No se encontró el campo usuario");
return;
}

if(password === null){
alert("No se encontró el campo contraseña");
return;
}

if(
usuario.value === "admin" &&
password.value === "1234"
){

sessionStorage.setItem(
"usuarioLogueado",
"admin"
);

window.location.href = "index.html";

}else{

alert("Usuario o contraseña incorrectos");

}

}
