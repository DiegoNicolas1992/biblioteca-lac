alert("socios.js cargado correctamente");

function guardarSocio() {

    alert("Entró a la función");

    let dni = document.getElementById("dni").value;
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let telefono = document.getElementById("telefono").value;

    if (
        dni === "" ||
        nombre === "" ||
        apellido === "" ||
        telefono === ""
    ) {
        alert("Complete todos los campos");
        return;
    }

    let socios =
        JSON.parse(localStorage.getItem("socios")) || [];

    socios.push({
        dni,
        nombre,
        apellido,
        telefono
    });

    localStorage.setItem(
        "socios",
        JSON.stringify(socios)
    );

    document.getElementById("mensaje").innerText =
        "Socio registrado correctamente";

    alert("Guardado correctamente");
}
