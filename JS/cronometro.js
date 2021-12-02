"use strict";


let hora = 0;
let minutos = 0;
let segundos = 0;
let milisegundos = 0;

let cron;

document.form_main.iniciar.onclick = () => iniciar();
document.form_main.pausar.onclick = () => pausar();
document.form_main.reiniciar.onclick = () => reiniciar();


function iniciar (){
    pausar();
    cron = setInterval (() => {timer(); }, 10);
}


function pausar(){
    clearInterval(cron);
}


function reiniciar(){
    hora = 0;
    minutos = 0;
    segundos = 0;
    milisegundos = 0;

    document.getElementById('hora').innerHTML = '00';
    document.getElementById('minutos').innerHTML = '00';
    document.getElementById('segundos').innerHTML = '00';
    document.getElementById('milisegundos').innerHTML = '00';
}

function timer(){

    if((milisegundos += 9) == 999 ){
        milisegundos = 0;
        segundos++;
    }

    if(segundos == 60) {
        segundos = 0;
        minutos++;
    }

    if(minutos == 60) {
        minutos = 0;
        hora++;
    }

    document.getElementById('hora').innerHTML = returnData(hora);
    document.getElementById('minutos').innerHTML = returnData(minutos);
    document.getElementById('segundos').innerHTML = returnData(segundos);
  //  document.getElementById('milisegundos').innerHTML = returnData(milisegundos);
    document.getElementById('milisegundos').innerHTML = returnData(maisDigito(milisegundos));
}


function maisDigito (milisegundos) {
    if (milisegundos < 100) {
    return  ('0'+milisegundos)

     } else {
        return milisegundos
    }
}


function returnData(input){
    return input >= 10 ? input : `0${input}`
}

