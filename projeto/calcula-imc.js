// p / altura * altura

var tdPeso = document.getElementById(peso-2);
var tdAltura = document.getElementById(altura-2);

var peso = tdPeso.textContent;
var altura = tdAltura.get;

//var ehDiferenteDeZero = (altura != 0); //false

if(altura != 0){
    var imc = peso / (altura * altura); // 25

alert(imc);
}else{
    alert("Não executei proque a altura é igual a zero");
}

