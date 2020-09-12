// copy IP
function copyIP(that, idIP){
	var inp = document.createElement('input');
	document.body.appendChild(inp)
	inp.value = 'JOGAR.MOMENTCRAFT.COM.BR';
	inp.select();
	document.execCommand('copy');
	inp.remove();
	var textTemp = idIP.text();
	idIP.text('COPIADO');
	setTimeout(() => { 
		idIP.css('opacity', '0');
		setTimeout(() => { 
			idIP.text(textTemp);
			idIP.css('opacity', '1');
		}, 300);
	}, 1000);
}