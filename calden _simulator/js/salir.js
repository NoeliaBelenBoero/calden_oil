let botonSalir = document.querySelector('.salir');

botonSalir.addEventListener("click", function(event){
    event.preventDefault();
    history.back();
});

// F3
window.addEventListener("keydown", (e) => {
    if (e.keyCode === 114) {
        e.preventDefault();
        $('#exampleModalCenteredScrollable1').modal('show')
    }
})