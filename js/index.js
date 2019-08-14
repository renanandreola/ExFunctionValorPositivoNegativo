//Crie uma função que receba um valor e informe se ele é positivo
//ou não.

var value = parseInt(prompt("Digite um valor: "));

function check (value) {
  if (value >= 0) {
    return document.body.append("Número positivo");
  }else if(value < 0){
    return document.body.append("Número nagativo");
  }
}
check(value);
