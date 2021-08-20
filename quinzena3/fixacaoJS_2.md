
function calculaPrecoTotal(quantidade) {
  let custoTotal
  if(quantidade < 12) {
    custoTotal = quantidade * 1.3 
  } else if (quantidade >=12) {
    custoTotal = quantidade * 1
  }
  
  return custoTotal
}