/* **** Comec,ando a configurar o JavaSript**** */
function carregar(){
  var msg = window.document.getElementById('msg');
  var img = window.document.getElementById('imagen');
  var data = new Date();
  var hora = data.getHours();
  msg.innerHTML = `Agora são ${hora} horas`
}
