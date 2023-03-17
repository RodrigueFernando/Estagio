

 var fatutamento =[{
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


var relatorio = fatutamento.map(function(item) {
    return ((item.valor *100)*20).toFixed(2);
});
console.log(relatorio);