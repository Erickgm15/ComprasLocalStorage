

function descargar(idContenedor){
    const div = document.getElementById(idContenedor);

    html2canvas(div).then(canvas => {
        const enlace = document.createElement("a");
        enlace.href = canvas.toDataURL("image/png");
        enlace.download = "captura.png";
        enlace.click();
    });
}

export { descargar };


// <script src = "https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.main.js"></script>