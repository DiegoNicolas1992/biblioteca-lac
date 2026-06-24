function guardarLibro() {

    let codigo = document.getElementById("codigo").value;
    let titulo = document.getElementById("titulo").value;
    let autor = document.getElementById("autor").value;
    let categoria = document.getElementById("categoria").value;

    if (
        codigo === "" ||
        titulo === "" ||
        autor === "" ||
        categoria === ""
    ) {
        alert("Complete todos los campos");
        return;
    }

    let libros =
        JSON.parse(localStorage.getItem("libros")) || [];

    libros.push({
        codigo,
        titulo,
        autor,
        categoria
    });

    localStorage.setItem(
        "libros",
        JSON.stringify(libros)
    );

    document.getElementById("mensaje").innerText =
        "Libro registrado correctamente";

    document.getElementById("codigo").value = "";
    document.getElementById("titulo").value = "";
    document.getElementById("autor").value = "";
    document.getElementById("categoria").value = "";
}
