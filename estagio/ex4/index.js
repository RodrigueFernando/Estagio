

 var faturamento =[{
     'nome':"Sp",
     "valor":67.83943
  } , 
  {  
    "nome:":"RJ", 
    "valor":36.67866
  },
   {   
    "nome":"MG",
    "valor": 29.22988
   },   
   { 
    "nome":"ES",
    "valor":27.16548 
   },
    { 
    "nome":"outros",
    "valor":19.84953
}];

var total = faturamento.reduce((total,atual)=>{
        return total +(atual.valor + atual.valor) 
},0);

var relatorio = faturamento.map(function(item) {
  return {
    nome : item.nome,
    valor :(( item.valor *total)*100).toFixed(2)
  }
});


                  

relatorio.forEach(function(item){
   console.log(`${item.nome} = ${item.valor}`)
});
