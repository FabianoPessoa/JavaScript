/* **** Comec,ando a configurar o JavaSript**** */
function carregar(){
  var msg = window.document.getElementById('msg');
  var img = window.document.getElementById('imagem');
  var data = new Date();
  /* Comentar a hora abaixo e forc,ar outros hora'rios */
  var hora = data.getHours();
  //var hora = 19;
  msg.innerHTML = `Agora são ${hora} horas`
  if (hora >= 0 && hora < 12){
    //Bom dia! 
    img.src ='fotomanha.jpg';
		document.body.style.background = '#e2cd9f';
  }else if(hora >=12 && hora <= 18){
    //Boa tarde!
    img.src ='fototarde.jpg';
		document.body.style.background = '#b9846f';
	}else
		{
    //Boa noite!
    img.src ='fotonoite.jpg';
		document.body.style.background = '#515154';
		}
}
