angular.module('app.controllers', [])
  
.controller('loginCtrl', function($scope) {

    console.log('loginCtrl');
})
   
.controller('signupCtrl', function($scope) {

})
   
.controller('cadastroDeSitCtrl', function($scope) {


$scope.Locais = [
    
    {nome:"Estacionamento Subsolo"},
    {nome:"Estacionamento Térreo"},
    {nome:"Recepção"}, 
    {nome:"Auditório"},
    {nome:"GBS"},
    {nome:"Academia"},
    {nome:"Espaço Bem viver"},
    {nome:"Bloco 1 – 1º Andar"}, 
    {nome:"Bloco 1 – 2º Andar"}, 
    {nome:"Bloco 1 – 3º Andar"},
    {nome:"Bloco 1 – 4º Andar"},
    {nome:"Bloco 1 – 5º Andar"}, 
    {nome:"Bloco 1 – 6º Andar"},
    {nome:"Bloco 1 – 7º Andar"},
    {nome:"Bloco 2 – 1º Andar"},
    {nome:"Bloco 2 – 2º Andar"},
    {nome:"Bloco 2 – 3º Andar"}, 
    {nome:"Bloco 2 – 4º Andar"}, 
    {nome:"Bloco 2 – 5º Andar"}, 
    {nome:"Bloco 2 – 6º Andar"},
    {nome:"Bloco 2 – 7º Andar"}, 
    {nome:"Terraço"}

  ];
})
 