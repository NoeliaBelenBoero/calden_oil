let botonCierre = document.querySelector('.cierre_turno');

botonCierre.addEventListener("click", function (event) {
  setTimeout(() => {
    event.preventDefault();
    Swal.fire({
      title: 'CIERRE DE TURNO',
      text: '¿Desea cerrar el turno actual?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#2CB073',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, Cerrar',
      cancelButtonText: 'No, Cancelar',
      reverseButtons: true,
      padding: '20px',
      backdrop: true,
      position: 'top',
      allowOutsideClick: true,
      allowEscapeKey: true,
      allowEnterKey: false,
      timer: 15000
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: "success",
          title: "Cierre exitoso",
          text: "El turno se ha cerrado correctamente",
          timer: 15000,
        }).then((result) => {
          if (result.isConfirmed) {
            location.reload();
          }
        })
      }
    })
  }, 500);
});

window.addEventListener("keydown", (e) => {
  if (e.keyCode === 117) {
    setTimeout(() => {
      Swal.fire({
        title: 'CIERRE DE TURNO',
        text: '¿Desea cerrar el turno actual?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#2CB073',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, Cerrar',
        cancelButtonText: 'No, Cancelar',
        reverseButtons: true,
        padding: '20px',
        backdrop: true,
        position: 'top',
        allowOutsideClick: true,
        allowEscapeKey: true,
        allowEnterKey: false,
        timer: 15000
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            icon: "success",
            title: "Cierre exitoso",
            text: "El turno se ha cerrado correctamente",
            timer: 15000
          }).then((result) => {
            if (result.isConfirmed) {
              location.reload();
            }
          })
        }
      })
    }, 500);
  }
})