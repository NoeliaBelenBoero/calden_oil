let botonImprimir = document.querySelector('.impresion');

botonImprimir.addEventListener("click", function(event){
    setTimeout (() => {
        event.preventDefault();
        Swal.fire({
            icon: "info",
            title: "Impresión de ticket",
            text: "Este botón o la tecla 'F8' imprime el ticket",
            timer: 150000
          }).then((result) => {
            if (result.isConfirmed) {
              location.reload();
            }
          });
      
    }, 500);
});

window.addEventListener("keydown", (e) => {
    if (e.keyCode === 119) {
        setTimeout(() => {
            Swal.fire({
                icon: "info",
                title: "Impresión de ticket",
                text: "Este botón o la tecla 'F8' imprime el ticket",
                timer: 150000
            });
        });
    }
})