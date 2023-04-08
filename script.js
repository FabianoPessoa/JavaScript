/* alert('Olá!'); */
/* window.alert('Olá!'); */
/***************************  
* Exige entrada
*/
/* window.confirm('Olá!'); */
/*****************************  
* Exige entrada
*/
/* window.prompt('Olá!'); */
/****************************
* Não teria como representar*
* as varáveis nos exemplos  *
* então estudei na teoria   *
*****************************/
/*let ou const  */
//var nome =  window.prompt('Qual nome?');
//window.alert('Oi, '+nome);
/******************************
* var n1 = window.prompt('Escreva numero 1');
* var n2 = window.prompt('Escreva numero 2');
* var s = n1 + n2;
* Não funciona pois são strings
* var n1 = Number.parseInt(window.prompt('Escreva numero 1'));
* var n2 = Number.parseInt(window.prompt('Escreva numero 2'));
* Number.parseFloat();
* var s = n1 + n2;
* funciona pois são números
*/
/**********************************
* Pode ser Simplificado para Number
* var n1 = Number(window.prompt('Escreva numero 1'));
* var n2 = Number(window.prompt('Escreva numero 2'));
* var s = n1 + n2;
* window.alert('soma '+s);
*************************************/
/*************************************
* Para converter para String
* String(<variavel>);
* ou
* <variavel>.toStrong();
***************************************/
/*****************************************
* var n1 = Number(window.prompt('Escreva numero 1'));
* var n2 = Number(window.prompt('Escreva numero 2'));
* var s = n1 + n2;
* window.alert(`Soma ${s}`);
****************************************/
var nome = window.prompt('Qual nome?');
document.write(`O nome tem comprimento ${nome.length} letras`);


