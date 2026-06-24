function ingresar() {

let usuario =
document.getElementById("usuario").value;

let clave =
document.getElementById("clave").value;

if(usuario === "admin" && clave === "1234"){

sessionStorage.setItem(
"usuarioLogueado",
"admin"
);

window.location.href = "index.html";

}else{

alert("Usuario o contraseña incorrectos");

}

}
