window.load = slide1();

var intervalo = 4000;

//slider da pagina home
function slide1() {

	document.getElementById("imageBg").style.backgroundImage = "url('assets/js/slide1.jpg')";
	setTimeout("slide2()", intervalo);

}

function slide2() {

	document.getElementById("imageBg").style.backgroundImage = "url('assets/js/slide2.jpg')";
	setTimeout("slide3()", intervalo);
	
}

function slide3() {

	document.getElementById("imageBg").style.backgroundImage = "url('assets/js/slide3.jpg')";
	setTimeout("slide1()", intervalo);
	
}
//-------------------------product-------------------------------------------------

function openModal(p) {

	document.getElementById('modal').style.top = '0';
	executeSwitch($p);
}

function closeModal() {

	document.getElementById('modal').style.top = '-100%';
}

function executeSwitch(p) {

	var titulo,texto;

	switch(p) {

		case 1:

			titulo = 'Produto 1';
			texto = 'Vamos tentar fazer funcionar o modal para o primeiro produto. Vamos tentar fazer funcionar o modal para o primeiro produto.Vamos tentar fazer funcionar o modal para o primeiro produto.Vamos tentar fazer funcionar o modal para o primeiro produto.';
			document.getElementById('modaltitle').innerHTML = titulo;
			document.getElementById('modaltext').innerHTML = texto;
			document.getElementById('modalimg').src = 'assets/images/poltrona.jpg';
			break;

		case 2:

			titulo = 'Produto 2';
			texto = 'Vamos tentar fazer funcionar o modal para o primeiro produto. Vamos tentar fazer funcionar o modal para o primeiro produto.Vamos tentar fazer funcionar o modal para o primeiro produto.Vamos tentar fazer funcionar o modal para o primeiro produto.';
			document.getElementById('modaltitle').innerHTML = titulo;
			document.getElementById('modaltext').innerHTML = texto;
			document.getElementById('modalimg').src = 'assets/images/poltrona2.jpg';
			break;

		case 3:

			titulo = 'Produto 3';
			texto = 'Vamos tentar fazer funcionar o modal para o primeiro produto. Vamos tentar fazer funcionar o modal para o primeiro produto.Vamos tentar fazer funcionar o modal para o primeiro produto.Vamos tentar fazer funcionar o modal para o primeiro produto.';
			document.getElementById('modaltitle').innerHTML = titulo;
			document.getElementById('modaltext').innerHTML = texto;
			document.getElementById('modalimg').src = 'assets/images/poltrona3.jpg';
			break;

		case 4:

			titulo = 'Produto 4';
			texto = 'Vamos tentar fazer funcionar o modal para o primeiro produto. Vamos tentar fazer funcionar o modal para o primeiro produto.Vamos tentar fazer funcionar o modal para o primeiro produto.Vamos tentar fazer funcionar o modal para o primeiro produto.';
			document.getElementById('modaltitle').innerHTML = titulo;
			document.getElementById('modaltext').innerHTML = texto;
			document.getElementById('modalimg').src = 'assets/images/poltrona2.jpg';
			break;

		case 5:

			titulo = 'Produto 5';
			texto = 'Vamos tentar fazer funcionar o modal para o primeiro produto. Vamos tentar fazer funcionar o modal para o primeiro produto.Vamos tentar fazer funcionar o modal para o primeiro produto.Vamos tentar fazer funcionar o modal para o primeiro produto.';
			document.getElementById('modaltitle').innerHTML = titulo;
			document.getElementById('modaltext').innerHTML = texto;
			document.getElementById('modalimg').src = 'assets/images/poltrona2.jpg';
			break;

		case 6:

			titulo = 'Produto 6';
			texto = 'Vamos tentar fazer funcionar o modal para o primeiro produto. Vamos tentar fazer funcionar o modal para o primeiro produto.Vamos tentar fazer funcionar o modal para o primeiro produto.Vamos tentar fazer funcionar o modal para o primeiro produto.';
			document.getElementById('modaltitle').innerHTML = titulo;
			document.getElementById('modaltext').innerHTML = texto;
			document.getElementById('modalimg').src = 'assets/images/poltrona2.jpg';
			break;

		case 7:

			titulo = 'Produto 7';
			texto = 'Vamos tentar fazer funcionar o modal para o primeiro produto. Vamos tentar fazer funcionar o modal para o primeiro produto.Vamos tentar fazer funcionar o modal para o primeiro produto.Vamos tentar fazer funcionar o modal para o primeiro produto.';
			document.getElementById('modaltitle').innerHTML = titulo;
			document.getElementById('modaltext').innerHTML = texto;
			document.getElementById('modalimg').src = 'assets/images/poltrona2.jpg';
			break;

		case 8:

			titulo = 'Produto 8';
			texto = 'Vamos tentar fazer funcionar o modal para o primeiro produto. Vamos tentar fazer funcionar o modal para o primeiro produto.Vamos tentar fazer funcionar o modal para o primeiro produto.Vamos tentar fazer funcionar o modal para o primeiro produto.';
			document.getElementById('modaltitle').innerHTML = titulo;
			document.getElementById('modaltext').innerHTML = texto;
			document.getElementById('modalimg').src = 'assets/images/poltrona2.jpg';
			break;

		case 9:

			titulo = 'Produto 9';
			texto = 'Vamos tentar fazer funcionar o modal para o primeiro produto. Vamos tentar fazer funcionar o modal para o primeiro produto.Vamos tentar fazer funcionar o modal para o primeiro produto.Vamos tentar fazer funcionar o modal para o primeiro produto.';
			document.getElementById('modaltitle').innerHTML = titulo;
			document.getElementById('modaltext').innerHTML = texto;
			document.getElementById('modalimg').src = 'assets/images/poltrona2.jpg';
			break;

		case 10:

			titulo = 'Produto 10';
			texto = 'Vamos tentar fazer funcionar o modal para o primeiro produto. Vamos tentar fazer funcionar o modal para o primeiro produto.Vamos tentar fazer funcionar o modal para o primeiro produto.Vamos tentar fazer funcionar o modal para o primeiro produto.';
			document.getElementById('modaltitle').innerHTML = titulo;
			document.getElementById('modaltext').innerHTML = texto;
			document.getElementById('modalimg').src = 'assets/images/poltrona2.jpg';
			break;

		case 11:

			titulo = 'Produto 11';
			texto = 'Vamos tentar fazer funcionar o modal para o primeiro produto. Vamos tentar fazer funcionar o modal para o primeiro produto.Vamos tentar fazer funcionar o modal para o primeiro produto.Vamos tentar fazer funcionar o modal para o primeiro produto.';
			document.getElementById('modaltitle').innerHTML = titulo;
			document.getElementById('modaltext').innerHTML = texto;
			document.getElementById('modalimg').src = 'assets/images/poltrona2.jpg';
			break;

		case 12:

			titulo = 'Produto 12';
			texto = 'Vamos tentar fazer funcionar o modal para o primeiro produto. Vamos tentar fazer funcionar o modal para o primeiro produto.Vamos tentar fazer funcionar o modal para o primeiro produto.Vamos tentar fazer funcionar o modal para o primeiro produto.';
			document.getElementById('modaltitle').innerHTML = titulo;
			document.getElementById('modaltext').innerHTML = texto;
			document.getElementById('modalimg').src = 'assets/images/poltrona2.jpg';
			break;

	}
}

