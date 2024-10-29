const $tiempo = document.querySelector('.tiempo');
$fecha = document.querySelector('.fecha');

function Relojdigital(){
    let f=new Date(),
    dia = f.getDate(),
    mes = f.getMonth() + 1,
    anio = f.getFullYear();

    dia = ('0' + dia).slice(-2);
    mes = ('0' + mes).slice(-2);

    let timeString = f.toLocaleTimeString();
    $tiempo.innerHTML = timeString;
    $fecha.innerHTML = `${dia}/${mes}/${anio}`
}

setInterval(()=> {
    Relojdigital()
}, 1000)