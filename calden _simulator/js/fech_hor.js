$fecha_actual = document.querySelector('.fecha');

function fechaActual() {
    let f = new Date(),
        dia = f.getDate(),
        mes = f.getMonth() + 1,
        anio = f.getFullYear();

    dia = ('0' + dia).slice(-2);
    mes = ('0' + mes).slice(-2);

    $fecha_actual.innerHTML = `${dia}/${mes}/${anio}`
}

fechaActual();

let d = new Date();
const horaActual = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds()
let colHora = document.querySelector(".hora");
colHora.innerHTML = horaActual;