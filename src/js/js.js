var numeroSecreto = parseInt(Math.random()*101) ;

var contador = 15;
while(chute != numeroSecreto) { 
  
  var chute = prompt("Digite um numero entre 0 e 100");

  if ( chute == numeroSecreto) {
    alert("Acertou!!");
  } else if (chute > numeroSecreto) {
    alert("Errou... O numero Secreto é menor!!" +  chute);
  } else if (chute < numeroSecreto) {
    alert("Errou... O numero Secreto é maior!!" + chute);
  }
  
 }