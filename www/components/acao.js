//variavel do texto display
var textDisplay="";

//primeiro valor das operações
var valor1=0;

//identificador das operações
var oper ="operador";

function zerarDisplay(){
  textDisplay="";
  //apos pegar o valor1 na operação atribui valor 0 ao display para captura do valor2
    $(".display").val("");
}

$(document).on("click",".botao", function(){

textDisplay += $(this).val();
$(".display").val(textDisplay);
})

$(document).on("click",".operador",function(){
  oper = $(this).html();
  valor1 = textDisplay;
  zerarDisplay();
})

$(document).on("click","#ce",function(){
  zerarDisplay();
  valor1=0;
})

$(document).on("click","#igual", function(){
  var valor2 = textDisplay;
  zerarDisplay();

  if(oper == "+"){
    textDisplay = parseFloat(valor1) + parseFloat(valor2);
  }
  if(oper == "-"){
    textDisplay = parseFloat(valor1) - parseFloat(valor2);
  }
  if(oper == "*"){
    textDisplay = parseFloat(valor1) * parseFloat(valor2);

  }
  if(oper == "/"){
    textDisplay = parseFloat(valor1) / parseFloat(valor2);

  }
  $(".display").val(textDisplay);
  
})