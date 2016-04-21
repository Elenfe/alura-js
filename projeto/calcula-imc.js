// p / altura * altura

var tdPeso = document.getElementById("peso-2");
var tdAltura = document.getElementById("altura-2");
console.log(tdAltura);

var peso = tdPeso.textContent;
var altura = tdAltura.textContent;

//var ehDiferenteDeZero = (altura != 0); //false

if(altura != 0){
    var imc = peso / (altura * altura); // 25

  console.log(imc);
}else
{
    console.log("Não executei proque a altura é igual a zero");
}

