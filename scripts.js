var visor='';
var operador='';
var erro='';

function exibe(valeu){
  document.getElementById('numbersResult'). innerHTML = valeu;
  document.getElementById('erro').innerHTML='';

}


function limpar(){
  visor='';
  operador='';
  erro='';
  exibe(0);

}

function addNumb(num){

  visor= document.getElementById('numbersResult').innerHTML;

  if(visor == 0){
    exibe(num.innerHTML);
  }
  else {
    exibe(visor + num.innerHTML);
  }

}

function addSinal(sinal){
    visor= document.getElementById('numbersResult').innerHTML;

    if(operador==''){
      operador = sinal.innerHTML;
      exibe(visor + operador);
    }
    else {
      erro=document.getElementById('erro');
      erro.style.color="red";
      erro.innerHTML = 'Operador já selecionado.'
    }

}

function calcular(){

  visor = document.getElementById('numbersResult').innerHTML;
  let resultado = visor.split(operador);


  if(operador=='+'){
    visor = parseFloat(resultado[0]) + parseFloat(resultado[1]);
    operador='';

  }
  else if(operador=='-') {
    visor = parseFloat(resultado[0]) - parseFloat(resultado[1]);
    operador='';

  }
  else if (operador=='*') {
    visor = parseFloat(resultado[0]) * parseFloat(resultado[1]);
    operador='';

  }
  else if (operador=='/') {
    visor = parseFloat(resultado[0]) / parseFloat(resultado[1]);
    operador='';

  }
  else {
    erro=document.getElementById('erro');
    erro.style.color="red";
    erro.innerHTML="Operador inválido. Tente novamente. ";
  }
  exibe(visor);
}
