const formulario = document.querySelector('#formularium');
const nombreInput = document.querySelector('#description');
const direccionInput = document.querySelector('#direccion');
const localidadInput = document.querySelector('#localidad');
const documentoInput = document.querySelector('#documento');
const categoriaInput = document.querySelector('#category');
const btnAgregar = document.querySelector('#agregar');




formulario.addEventListener('submit', agregaCliente);

function agregaCliente(e) {
    e.preventDefault();
    
    let nombreCliente = document.querySelector('#cliente');
    let direccionCliente = document.querySelector('#direc');
    let localidadCliente = document.querySelector('#local');
    let documentoCliente = document.querySelector('#docu');
    let cateCliente = document.querySelector('#categ');


    nombreCliente.innerHTML = nombreInput.value;
    direccionCliente.innerHTML = direccionInput.value;
    localidadCliente.innerHTML = localidadInput.value;
    documentoCliente.innerHTML = documentoInput.value
    cateCliente.innerHTML = categoriaInput.value;

}

window.addEventListener("keydown", (e) => {
    if (e.keyCode === 115) {
        
        $('#exampleModalCenter').modal('show')
    }
})

/*---------------------------------------------------------------------------------------------------------------- */


// AGREGAR FILAS COMBUSTIBLE

let pantalla = document.querySelector(".total");
let iva = document.querySelector('#iva');
let gravado = document.querySelector('#gravado');
let tasas = document.querySelector('#tasas');
let imp_int = document.querySelector('#imp_int');
let valTot = 0;
let ivaTot = 0;
let gravTot = 0;
let tasTot = 0;
let impTot = 0;

function agregarFila1() {
    const cuerpoTabla = document.getElementById("tableBody");
    const template = document.getElementById("tRow");
    const templateRow = template.content;

    let tr = templateRow.cloneNode(true);

    const surtidor = document.querySelector(".l1").textContent;
    const litros = document.querySelector(".s1").textContent;
    const producto = document.querySelector(".p1").textContent;
    const valor = document.querySelector(".v1").textContent;
    const total = document.querySelector(".t1").textContent;

    let colSurt = tr.querySelector(".tabSurt");
    let colLitr = tr.querySelector(".tabLitr");
    let colProd = tr.querySelector(".tabProd");
    let colVal = tr.querySelector(".tabVal");
    let colTot = tr.querySelector(".tabTot");

    colSurt.textContent = surtidor;
    colLitr.textContent = litros;
    colProd.textContent = producto;
    colVal.textContent = valor;
    colTot.textContent = total;

    cuerpoTabla.appendChild(tr);

    pantalla.innerHTML = colTot.textContent;
    valTot += parseFloat(pantalla.innerHTML);
    pantalla.innerHTML = valTot;
    ivaTot = 21*valTot/100;// IVA
    iva.innerHTML = ivaTot.toFixed(2);
    gravTot = 70.9*valTot/100;// GRAVADO
    gravado.innerHTML = gravTot.toFixed(2);
    tasTot = 1.16*valTot/100;// TASAS
    tasas.innerHTML = tasTot.toFixed(2);
    impTot = 18.96*valTot/100;// IMPUESTO INTERNO
    imp_int.innerHTML = impTot.toFixed(2);
}

function agregarFila2() {
    const cuerpoTabla = document.getElementById("tableBody");
    const template = document.getElementById("tRow");
    const templateRow = template.content;

    let tr = templateRow.cloneNode(true);

    const surtidor = document.querySelector(".l2").textContent;
    const litros = document.querySelector(".s2").textContent;
    const producto = document.querySelector(".p2").textContent;
    const valor = document.querySelector(".v2").textContent;
    const total = document.querySelector(".t2").textContent;

    let colSurt = tr.querySelector(".tabSurt");
    let colLitr = tr.querySelector(".tabLitr");
    let colProd = tr.querySelector(".tabProd");
    let colVal = tr.querySelector(".tabVal");
    let colTot = tr.querySelector(".tabTot");

    colSurt.textContent = surtidor;
    colLitr.textContent = litros;
    colProd.textContent = producto;
    colVal.textContent = valor;
    colTot.textContent = total;

    cuerpoTabla.appendChild(tr);

    pantalla.innerHTML = colTot.textContent;
    valTot += parseFloat(pantalla.innerHTML);
    pantalla.innerHTML = valTot;
    ivaTot = 21*valTot/100;// IVA
    iva.innerHTML = ivaTot.toFixed(2);
    gravTot = 70.9*valTot/100;// GRAVADO
    gravado.innerHTML = gravTot.toFixed(2);
    tasTot = 1.16*valTot/100;// TASAS
    tasas.innerHTML = tasTot.toFixed(2);
    impTot = 18.96*valTot/100;// IMPUESTO INTERNO
    imp_int.innerHTML = impTot.toFixed(2);
}

function agregarFila3() {
    const cuerpoTabla = document.getElementById("tableBody");
    const template = document.getElementById("tRow");
    const templateRow = template.content;

    let tr = templateRow.cloneNode(true);

    const surtidor = document.querySelector(".l3").textContent;
    const litros = document.querySelector(".s3").textContent;
    const producto = document.querySelector(".p3").textContent;
    const valor = document.querySelector(".v3").textContent;
    const total = document.querySelector(".t3").textContent;

    let colSurt = tr.querySelector(".tabSurt");
    let colLitr = tr.querySelector(".tabLitr");
    let colProd = tr.querySelector(".tabProd");
    let colVal = tr.querySelector(".tabVal");
    let colTot = tr.querySelector(".tabTot");

    colSurt.textContent = surtidor;
    colLitr.textContent = litros;
    colProd.textContent = producto;
    colVal.textContent = valor;
    colTot.textContent = total;

    cuerpoTabla.appendChild(tr);

    pantalla.innerHTML = colTot.textContent;
    valTot += parseFloat(pantalla.innerHTML);
    pantalla.innerHTML = valTot;
    ivaTot = 21*valTot/100;// IVA
    iva.innerHTML = ivaTot.toFixed(2);
    gravTot = 70.9*valTot/100;// GRAVADO
    gravado.innerHTML = gravTot.toFixed(2);
    tasTot = 1.16*valTot/100;// TASAS
    tasas.innerHTML = tasTot.toFixed(2);
    impTot = 18.96*valTot/100;// IMPUESTO INTERNO
    imp_int.innerHTML = impTot.toFixed(2);
}

function agregarFila4() {
    const cuerpoTabla = document.getElementById("tableBody");
    const template = document.getElementById("tRow");
    const templateRow = template.content;

    let tr = templateRow.cloneNode(true);

    const surtidor = document.querySelector(".l4").textContent;
    const litros = document.querySelector(".s4").textContent;
    const producto = document.querySelector(".p4").textContent;
    const valor = document.querySelector(".v4").textContent;
    const total = document.querySelector(".t4").textContent;

    let colSurt = tr.querySelector(".tabSurt");
    let colLitr = tr.querySelector(".tabLitr");
    let colProd = tr.querySelector(".tabProd");
    let colVal = tr.querySelector(".tabVal");
    let colTot = tr.querySelector(".tabTot");

    colSurt.textContent = surtidor;
    colLitr.textContent = litros;
    colProd.textContent = producto;
    colVal.textContent = valor;
    colTot.textContent = total;

    cuerpoTabla.appendChild(tr);

    pantalla.innerHTML = colTot.textContent;
    valTot += parseFloat(pantalla.innerHTML);
    pantalla.innerHTML = valTot;
    ivaTot = 21*valTot/100;// IVA
    iva.innerHTML = ivaTot.toFixed(2);
    gravTot = 70.9*valTot/100;// GRAVADO
    gravado.innerHTML = gravTot.toFixed(2);
    tasTot = 1.16*valTot/100;// TASAS
    tasas.innerHTML = tasTot.toFixed(2);
    impTot = 18.96*valTot/100;// IMPUESTO INTERNO
    imp_int.innerHTML = impTot.toFixed(2);
}

window.addEventListener("keydown", (e) => {
    if (e.keyCode === 118) {
        
        $('#exampleModalCenteredScrollable').modal('show')
    }
})

// AGREGAR FILAS PRODUCTOS

function agregarFila1P() {
    const cuerpoTabla = document.getElementById("tableBody");
    const template = document.getElementById("tRow");
    const templateRow = template.content;

    let tr = templateRow.cloneNode(true);

    const surtidor = document.querySelector(".c1").textContent;
    const litros = document.querySelector(".a1").textContent;
    const producto = document.querySelector(".d1").textContent;
    const valor = document.querySelector(".pr1").textContent;
    const total = document.querySelector(".pt1").textContent;

    let colSurt = tr.querySelector(".tabSurt");
    let colLitr = tr.querySelector(".tabLitr");
    let colProd = tr.querySelector(".tabProd");
    let colVal = tr.querySelector(".tabVal");
    let colTot = tr.querySelector(".tabTot");

    colSurt.textContent = surtidor;
    colLitr.textContent = litros;
    colProd.textContent = producto;
    colVal.textContent = valor;
    colTot.textContent = total;

    cuerpoTabla.appendChild(tr);

    pantalla.innerHTML = colTot.textContent;
    valTot += parseFloat(pantalla.innerHTML);
    pantalla.innerHTML = valTot;
    ivaTot = 21*valTot/100;// IVA
    iva.innerHTML = ivaTot.toFixed(2);
    gravTot = 70.9*valTot/100;// GRAVADO
    gravado.innerHTML = gravTot.toFixed(2);
    tasTot = 1.16*valTot/100;// TASAS
    tasas.innerHTML = tasTot.toFixed(2);
    impTot = 18.96*valTot/100;// IMPUESTO INTERNO
    imp_int.innerHTML = impTot.toFixed(2);;
}

function agregarFila2P() {
    const cuerpoTabla = document.getElementById("tableBody");
    const template = document.getElementById("tRow");
    const templateRow = template.content;

    let tr = templateRow.cloneNode(true);

    const surtidor = document.querySelector(".c2").textContent;
    const litros = document.querySelector(".a2").textContent;
    const producto = document.querySelector(".d2").textContent;
    const valor = document.querySelector(".pr2").textContent;
    const total = document.querySelector(".pt2").textContent;

    let colSurt = tr.querySelector(".tabSurt");
    let colLitr = tr.querySelector(".tabLitr");
    let colProd = tr.querySelector(".tabProd");
    let colVal = tr.querySelector(".tabVal");
    let colTot = tr.querySelector(".tabTot");

    colSurt.textContent = surtidor;
    colLitr.textContent = litros;
    colProd.textContent = producto;
    colVal.textContent = valor;
    colTot.textContent = total;

    cuerpoTabla.appendChild(tr);

    pantalla.innerHTML = colTot.textContent;
    valTot += parseFloat(pantalla.innerHTML);
    pantalla.innerHTML = valTot;
    ivaTot = 21*valTot/100;// IVA
    iva.innerHTML = ivaTot.toFixed(2);
    gravTot = 70.9*valTot/100;// GRAVADO
    gravado.innerHTML = gravTot.toFixed(2);
    tasTot = 1.16*valTot/100;// TASAS
    tasas.innerHTML = tasTot.toFixed(2);
    impTot = 18.96*valTot/100;// IMPUESTO INTERNO
    imp_int.innerHTML = impTot.toFixed(2);
}

function agregarFila3P() {
    const cuerpoTabla = document.getElementById("tableBody");
    const template = document.getElementById("tRow");
    const templateRow = template.content;

    let tr = templateRow.cloneNode(true);

    const surtidor = document.querySelector(".c3").textContent;
    const litros = document.querySelector(".a3").textContent;
    const producto = document.querySelector(".d3").textContent;
    const valor = document.querySelector(".pr3").textContent;
    const total = document.querySelector(".pt3").textContent;

    let colSurt = tr.querySelector(".tabSurt");
    let colLitr = tr.querySelector(".tabLitr");
    let colProd = tr.querySelector(".tabProd");
    let colVal = tr.querySelector(".tabVal");
    let colTot = tr.querySelector(".tabTot");

    colSurt.textContent = surtidor;
    colLitr.textContent = litros;
    colProd.textContent = producto;
    colVal.textContent = valor;
    colTot.textContent = total;

    cuerpoTabla.appendChild(tr);

    pantalla.innerHTML = colTot.textContent;
    valTot += parseFloat(pantalla.innerHTML);
    pantalla.innerHTML = valTot;
    ivaTot = 21*valTot/100;// IVA
    iva.innerHTML = ivaTot.toFixed(2);
    gravTot = 70.9*valTot/100;// GRAVADO
    gravado.innerHTML = gravTot.toFixed(2);
    tasTot = 1.16*valTot/100;// TASAS
    tasas.innerHTML = tasTot.toFixed(2);
    impTot = 18.96*valTot/100;// IMPUESTO INTERNO
    imp_int.innerHTML = impTot.toFixed(2);
}

function agregarFila4P() {
    const cuerpoTabla = document.getElementById("tableBody");
    const template = document.getElementById("tRow");
    const templateRow = template.content;

    let tr = templateRow.cloneNode(true);

    const surtidor = document.querySelector(".c4").textContent;
    const litros = document.querySelector(".a4").textContent;
    const producto = document.querySelector(".d4").textContent;
    const valor = document.querySelector(".pr4").textContent;
    const total = document.querySelector(".pt4").textContent;

    let colSurt = tr.querySelector(".tabSurt");
    let colLitr = tr.querySelector(".tabLitr");
    let colProd = tr.querySelector(".tabProd");
    let colVal = tr.querySelector(".tabVal");
    let colTot = tr.querySelector(".tabTot");

    colSurt.textContent = surtidor;
    colLitr.textContent = litros;
    colProd.textContent = producto;
    colVal.textContent = valor;
    colTot.textContent = total;

    cuerpoTabla.appendChild(tr);

    pantalla.innerHTML = colTot.textContent;
    valTot += parseFloat(pantalla.innerHTML);
    pantalla.innerHTML = valTot;
    ivaTot = 21*valTot/100;// IVA
    iva.innerHTML = ivaTot.toFixed(2);
    gravTot = 70.9*valTot/100;// GRAVADO
    gravado.innerHTML = gravTot.toFixed(2);
    tasTot = 1.16*valTot/100;// TASAS
    tasas.innerHTML = tasTot.toFixed(2);
    impTot = 18.96*valTot/100;// IMPUESTO INTERNO
    imp_int.innerHTML = impTot.toFixed(2);
}