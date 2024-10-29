window.addEventListener("keydown", (e) => {
    if (e.keyCode === 113) {
        
        $('#myModal1').modal('show')
    }
})

let qr1 = document.getElementById('qr1');
let qr2 = document.getElementById('qr2');
let qr3 = document.getElementById('qr3');
let qr4 = document.getElementById('qr4');

qr1.addEventListener("click", function(event){
    setTimeout (() => {
        event.preventDefault();
        qr1.style.border = '4px solid blue';
        qr1.style.borderRadius = '10px'
        qr2.style.border = 'none';
        qr3.style.border = 'none';
        qr4.style.border = 'none';
    });
});

qr2.addEventListener("click", function(event){
    setTimeout (() => {
        event.preventDefault();
        qr2.style.border = '4px solid blue';
        qr2.style.borderRadius = '10px'
        qr1.style.border = 'none';
        qr3.style.border = 'none';
        qr4.style.border = 'none';
    });
});

qr3.addEventListener("click", function(event){
    setTimeout (() => {
        event.preventDefault();
        qr3.style.border = '4px solid blue';
        qr3.style.borderRadius = '10px'
        qr1.style.border = 'none';
        qr2.style.border = 'none';
        qr4.style.border = 'none';
    });
});

qr4.addEventListener("click", function(event){
    setTimeout (() => {
        event.preventDefault();
        qr4.style.border = '4px solid blue';
        qr4.style.borderRadius = '10px'
        qr1.style.border = 'none';
        qr2.style.border = 'none';
        qr3.style.border = 'none';
    });
});

let btn_qr = document.getElementById('btn_qr');

btn_qr.addEventListener("click", function(event){
    setTimeout (() => {
        event.preventDefault();
        Swal.fire({
            icon: "info",
            title: "Impresión de ticket",
            imageUrl: "images/icon_impresora.jpeg",
            imageWidth: 100,
            imageHeight: 100,
            imageAlt: 'Custom image',
            text: "Imprimiendo comprobante",
            timer: 150000
          }).then((result) => {
            if (result.isConfirmed) {
              location.reload();
            }
          });
    }, 500);
});