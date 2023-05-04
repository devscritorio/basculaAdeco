function Press(elem){
    elem.style.backgroundColor='#54c2e7';
}
function unPress(elem){
    elem.style.backgroundColor='#add8e6';
}

const pantalla1=document.getElementById('casilla1');
const pantalla2=document.getElementById('casilla2');
const pantalla3=document.getElementById('casilla3');
const pantalla4=document.getElementById('casilla4');
const pantalla5=document.getElementById('casilla5');
const ticketdatos=document.getElementById('ticketcompra');
const totaltotal=document.getElementById('totaltotal'); //estamos intentando que el importe total aparezca en el ticket
const index = document.getElementById('ticket');


let precioproductototal=0;
let validador=false;
let importeTotal=0;
let artículo="";
let pesoaleatorio=0;
let preciototal=0;
let bloqueadorcesta=true;
let lista="";

function Select(memoria){
    if(bloqueadorcesta == true) {
    switch(memoria){
        case 0:
        pantalla1.innerHTML="Aguacates";
        pantalla2.innerHTML="3.2";
        pantalla3.innerHTML="";
        pantalla4.innerHTML="";
        precioproductototal=3.2;
        artículo="Aguacates";
        validador=true;
        break;
        case 1:
        pantalla1.innerHTML="Arándanos";
        pantalla2.innerHTML="2.8";
        pantalla3.innerHTML="";
        pantalla4.innerHTML="";
        precioproductototal=2.8;
        artículo="Arándanos";
        validador=true;
        break;
        case 2:
        pantalla1.innerHTML="Cerezas";
        pantalla2.innerHTML="1.4";
        pantalla3.innerHTML="";
        pantalla4.innerHTML="";
        precioproductototal=1.4;
        artículo="Cerezas";
        validador=true;
        break;
        case 3:
        pantalla1.innerHTML="Cocos";
        pantalla2.innerHTML="2.4";
        pantalla3.innerHTML="";
        pantalla4.innerHTML="";
        precioproductototal=2.4;
        artículo="Cocos";
        validador=true;
        break;
        case 4:
        pantalla1.innerHTML="Fresas";
        pantalla2.innerHTML="1.1";
        pantalla3.innerHTML="";
        pantalla4.innerHTML="";
        precioproductototal=1.1;
        artículo="Fresas";
        validador=true;
        break;
        case 5:
        pantalla1.innerHTML="Kiwis";
        pantalla2.innerHTML="0.8";
        pantalla3.innerHTML="";
        pantalla4.innerHTML="";
        precioproductototal=0.8;
        artículo="Kiwis";
        validador=true;
        break;
        case 6:
        pantalla1.innerHTML="Limones";
        pantalla2.innerHTML="0.6";
        pantalla3.innerHTML="";
        pantalla4.innerHTML="";
        precioproductototal=0.6;
        artículo="Limones";
        validador=true;
        break;
        case 7:
        pantalla1.innerHTML="Manzanas";
        pantalla2.innerHTML="0.9";
        pantalla3.innerHTML="";
        pantalla4.innerHTML="";
        precioproductototal=0.9;
        artículo="Manzanas";
        validador=true;
        break;
        case 8:
        pantalla1.innerHTML="Naranjas";
        pantalla2.innerHTML="0.6";
        pantalla3.innerHTML="";
        pantalla4.innerHTML="";
        precioproductototal=0.6;
        artículo="Naranjas";
        validador=true;
        break;
        case 9:
        pantalla1.innerHTML="Papayas";
        pantalla2.innerHTML="2.1";
        pantalla3.innerHTML="";
        pantalla4.innerHTML="";
        precioproductototal=2.1;
        artículo="Papayas";
        validador=true;
        break;
        case 10:
        pantalla1.innerHTML="Peras";
        pantalla2.innerHTML="1.4";
        pantalla3.innerHTML="";
        pantalla4.innerHTML="";
        precioproductototal=1.4;
        artículo="Peras";
        validador=true;
        break;
        case 11:
        pantalla1.innerHTML="Piñas";
        pantalla2.innerHTML="2.6";
        pantalla3.innerHTML="";
        pantalla4.innerHTML="";
        precioproductototal=2.6;
        artículo="Piñas";
        validador=true;
        break;
        case 12:
        pantalla1.innerHTML="Plátanos";
        pantalla2.innerHTML="1.2";
        pantalla3.innerHTML="";
        pantalla4.innerHTML="";
        precioproductototal=1.2;
        artículo="Plátanos";
        validador=true;
        break;
        case 13:
        pantalla1.innerHTML="Sandías";
        pantalla2.innerHTML="2";
        pantalla3.innerHTML="";
        pantalla4.innerHTML="";
        precioproductototal=2;
        artículo="Sandías";
        validador=true;
        break;
        case 14:
        pantalla1.innerHTML="Uvas";
        pantalla2.innerHTML="1.2";
        pantalla3.innerHTML="";
        pantalla4.innerHTML="";
        precioproductototal=1.2;
        artículo="Uvas";
        validador=true;
        break;
    }
}
}

function Limpiar(){
    validador=false;
    pantalla1.innerHTML="";
    pantalla2.innerHTML="";
    pantalla3.innerHTML="";
    pantalla4.innerHTML="";
    pantalla5.innerHTML="";
    importeTotal=0;
    artículo="";
    pesoaleatorio=0;
    preciototal=0;
    ticketdatos.innerHTML="";
    bloqueadorcesta=true;
    totaltotal.innerHTML="";
    index.style.zIndex = -1;

}

function Pesarycalcular(){
    if(bloqueadorcesta == true) {
        if (validador){
        pesoaleatorio=Math.random() * (5 - 0) + 0;
        pesoaleatorio=Math.round(pesoaleatorio*100.0)/100.0;
        pantalla3.innerHTML=pesoaleatorio;
        preciototal=pesoaleatorio*precioproductototal;
        preciototal=Math.round(preciototal*100.0)/100.0;
        pantalla4.innerHTML=preciototal;
        }
    }
}

function Añadir(){
    if(bloqueadorcesta == true) {
        if (preciototal != 0){
            if (validador){
                importeTotal = preciototal + importeTotal;
                importeTotal=Math.round(importeTotal*100.0)/100.0;
                pantalla5.innerHTML=importeTotal;
                lista+="<tr><td> "+artículo+" </td><td> "+precioproductototal+" </td><td> "+pesoaleatorio+" </td><td> "+preciototal+" </td></tr>"
        }
}
}
}
//No hay problema en que en el ticket se reflejen varias compras del mismo producto (artículo, precio, cantidad e importe).

function Cesta(){
    totaltotal.innerHTML=importeTotal + "€";
    ticketdatos.innerHTML = lista;
    //¿Redondear a dos decimales?
    bloqueadorcesta=false;
    index.style.zIndex = 1;
}

//Debe generar el ticket de la compra total (puedes superponerlo a la báscula, que aparezca abajo o a un lado)
//En el ticket se debe mostrar el importe total de la compra




