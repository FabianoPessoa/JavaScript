function verificar(){
	/* Variaveis*/
	var data = new Date();
	var ano = data.getFullYear();
	var fano = document.getElementById('txtano');
	var res = document.querySeletor('div#res');

	/* programa */
	if(fano.value.length == 0 || Number(fano.value)> ano ) { 
		window.alert('[ERRO]Verifique os dados');
	}
	else { 
		var fsex = document.getElementById('radsex');
		var idade = ano - Number(fano.value);
		res.innerHTML = `Idade calculada: ${idade}`;
		}
}