/* **** Comec,ando a configurar o JavaSript**** */
function carregar(){
  var msg = window.document.getElementById('msg');
  var img = window.document.getElementById('imagen');
  var data = new Date();
  /* Comentar a hora abaixo e forc,ar outros hora'rios */
  var hora = data.getHours();
  //var hora = 8;
  msg.innerHTML = `Agora são ${hora} horas`
  if (hora >= 0 && hora < 12){
    //Bom dia! 
    /* img.src ='fotomanha.png'; */
  }else if(hora <=12 && hora < 18){
    //Boa tarde!
    /* img.src ='fototarde.png'; */
  }else{
    //boa noite!
    /* img.src ='fotonoite.png'; */
  }
}
