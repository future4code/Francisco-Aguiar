```
function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
  let salarioFinal = 2000
  
  if (qtdeCarrosVendidos >= 1) {
    const precoMedioDeCadaCarroVendido = valorTotalVendas / qtdeCarrosVendidos
    salarioFinal = 2000 + (qtdeCarrosVendidos * (100 + ((5/100)*precoMedioDeCadaCarroVendido)))
    
  }
    
  
 
   
  return salarioFinal  
}
```