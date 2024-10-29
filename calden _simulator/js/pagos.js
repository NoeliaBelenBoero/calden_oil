let btn_pagos = document.querySelector('.opcPagos');

btn_pagos.addEventListener("click", function(event){
    setTimeout (() => {
        event.preventDefault();
        Swal.fire({
            icon: "info",
            title: "OPCIONES DE PAGO",
            text: "Este botón o la tecla 'F12' permite acceder a las opciones de pago con cheques/tarjetas",
            timer: 150000
          }).then((result) => {
            if (result.isConfirmed) {
              location.reload();
            }
          });
      
    }, 500);
});

window.addEventListener("keydown", (e) => {
    if (e.keyCode === 123) {
        e.preventDefault();
        setTimeout(() => {
            Swal.fire({
                icon: "info",
                title: "OPCIONES DE PAGO",
                text: "Este botón o la tecla 'F12' permite acceder a las opciones de pago con cheques/tarjetas",
                timer: 150000
            });
        });
    }
})