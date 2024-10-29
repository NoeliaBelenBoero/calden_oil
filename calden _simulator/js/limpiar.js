let btn_limpiar = document.querySelector('.limpia');

btn_limpiar.addEventListener("click", function (event) {
    setTimeout(() => {
        event.preventDefault();
        location.reload();
    }, 500);
});

window.addEventListener("keydown", (e) => {
    if (e.keyCode === 122) {
        e.preventDefault();
        setTimeout(() => {

            location.reload();
        }, 500);
    }
});