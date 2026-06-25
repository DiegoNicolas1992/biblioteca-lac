function ingresar() {

let usuario =
document.getElementById("usuario").value;

let password =
document.getElementById("password").value;

if(usuario === "admin" && password === "1234"){

sessionStorage.setItem(
"usuarioLogueado",
"admin"
);

window.location.href = "index.html";

}else{

alert("Usuario o contraseña incorrectos");

}

}
