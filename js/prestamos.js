function guardarPrestamo() {

    let socio = document.getElementById("socio").value;
    let libro = document.getElementById("libro").value;
    let fecha = document.getElementById("fecha").value;

    if (
        socio === "" ||
        libro === "" ||
        fecha === ""
    ) {
        alert("Complete todos los campos");
        return;
    }

    let prestamos =
        JSON.parse(localStorage.getItem("prestamos")) || [];

    prestamos.push({
        socio,
        libro,
        fecha
    });

    localStorage.setItem(
        "prestamos",
        JSON.stringify(prestamos)
    );

    document.getElementById("mensaje").innerText =
        "Préstamo registrado correctamente";

    document.getElementById("socio").value = "";
    document.getElementById("libro").value = "";
    document.getElementById("fecha").value = "";
}
