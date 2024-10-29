let btn_manuales = document.querySelector('.fac_manual');

btn_manuales.addEventListener("click", function(event){
    setTimeout (() => {
        event.preventDefault();
        Swal.fire({
            icon: "info",
            title: "FACTURACION MANUAL",
            text: "Acceso a facturación manual, uso autorizado únicamente por administradores.",
            timer: 150000
          })
      
    }, 500);
});

window.addEventListener("keydown", (e) => {
    if (e.keyCode === 121) {
        event.preventDefault();
        setTimeout(() => {
            Swal.fire({
                icon: "info",
                title: "FACTURACION MANUAL",
                text: "Acceso a facturación manual, uso autorizado únicamente por administradores.",
                timer: 150000
            });
        }, 500);
    }
})

let btn_choferes = document.querySelector('.choferes');

btn_choferes.addEventListener("click", function(event){
    setTimeout (() => {
        event.preventDefault();
        Swal.fire({
            icon: "info",
            title: "INGRESO DE CHOFERES Y VEHICULOS",
            text: "Ingreso de datos del vehiculo y del chofer en la factura.",
            timer: 150000
          })
      
    }, 500);
});

window.addEventListener("keydown", (e) => {
    if (e.keyCode === 120) {
        event.preventDefault();
        setTimeout(() => {
            Swal.fire({
                icon: "info",
                title: "INGRESO DE CHOFERES Y VEHICULOS",
                text: "Ingreso de datos del vehiculo y del chofer en la factura.",
                timer: 150000
            });
        }, 500);
    }
})