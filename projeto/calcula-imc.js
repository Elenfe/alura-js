// p / altura * altura

var peso = 100;
var altura = 2.0;

//var ehDiferenteDeZero = (altura != 0); //false

if(altura != 0){
    var imc = peso / (altura * altura); // 25

alert(imc);
}else{
    alert("Não executei proque a altura é igual a zero");
}

