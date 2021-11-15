function verificar(){ 
	window.alert('borao peridodo');
	var data = new Date();
	var ano = data.getFullYear();
	var fano = document.getElementById('txtano');
	var res = document.querySeletor('div#res');
	if(fano.value.length == 0 || fano.value> ano ) { 
		window.alert('[ERRO]Verifique os dados');
	}
	else { 
		window.alert('tudo ok');
		}
}

