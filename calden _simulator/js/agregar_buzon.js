let totalTransferido = document.querySelector('.totTransf')
let total = 0;

function agregarFilaBuzon() {

    const cuerpoTablaModal = document.getElementById("tbodyModal");
    const templateModal = document.getElementById("tRowModal");
    const templateRowModal = templateModal.content;

    let trModal = templateRowModal.cloneNode(true);


    let d = new Date();
    const horaActual = d.getHours() + ":" + d.getMinutes() + ":" +  d.getSeconds()
    let colHora = trModal.querySelector(".date");
    colHora.textContent = horaActual;
  
    
    const importe = document.querySelector('.valor').value;
    let colImporte = trModal.querySelector(".tabImp");
    colImporte.textContent = importe;

    let colDetalle = trModal.querySelector(".tabOrDes");
    if (document.getElementById('entregaTes').checked) {
        const detalle = document.getElementById('l_et').textContent;
        colDetalle.textContent = detalle;
    }

    if (document.getElementById('recibeTes').checked) {
        const detalle = document.getElementById('l_rt').textContent;
        colDetalle.textContent = detalle;
    }

    if (document.getElementById('entregaEmp').checked) {
        const detalle = document.getElementById('l_er').textContent;
        colDetalle.textContent = detalle;
    }

    
    cuerpoTablaModal.appendChild(trModal);

    totalTransferido.innerHTML = colImporte.textContent;
    total += parseFloat(totalTransferido.innerHTML);
    totalTransferido.innerHTML = total;

    document.querySelector('.valor').value = "";

    setTimeout (() => {
        //event.preventDefault();
        Swal.fire({
            icon: "info",
            title: "Impresión de ticket",
            imageUrl: "images/icon_impresora.jpeg",
            imageWidth: 100,
            imageHeight: 100,
            imageAlt: 'Custom image',
            text: "Imprimiendo comprobante",
            timer: 150000
          })
    }, 500);
}