<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<meta name="viewport">
		<title>Casa & Interiores</title>
		<link href="https://fonts.googleapis.com/css2?family=Srisakdi:wght@700&display=swap" rel="stylesheet">
		<link href="https://fonts.googleapis.com/css2?family=Lancelot&display=swap" rel="stylesheet">
		<link rel="stylesheet" type="text/css" href="<?php echo BASE_URL;?>assets/css/template.css" />
		<link rel="stylesheet" type="text/css" href="<?php echo BASE_URL;?>assets/css/home.css" />
		<link rel="stylesheet" type="text/css" href="<?php echo BASE_URL;?>assets/css/contato.css" />
		<link rel="stylesheet" type="text/css" href="<?php echo BASE_URL;?>assets/css/produtos.css" />
		<link rel="stylesheet" type="text/css" href="<?php echo BASE_URL;?>assets/css/sobre.css" />
		<link rel="stylesheet" type="text/css" href="<?php echo BASE_URL;?>assets/css/modal.css" />
		
	</head>
	<body>
		<div class="bg_modal" id="modal">
					<div class="modal">
						<span class="close" onclick="closeModal()">&times;</span>
						<div class="modal_img"><img id="modalimg" class="modalimg"  src="<?php echo BASE_URL;?>assets/images/poltrona.jpg" /></div>
						<div class="modal_produto">
							<div id="modaltitle" class="modal_title">NOME DO PRODUTO</div>
							<div id="modaltext" class="modal_text">Fale sobre as características principais do produto...Fale sobre as características principais do produto...Fale sobre as características principais do produto...Fale sobre as características principais do produto...Fale sobre as características principais do produto...</div>
						</div>
					</div>
				</div>
				<div class="top_contato">
					<div class="top_contato_int">
					<div class="fonemail">Contato: (99)9 9999-9999/seuemail@email.com</div>
					<div class="social">
						<img class="icons" src="<?php echo BASE_URL;?>assets/images/faceicon2.png" />
						<img class="icons" src="<?php echo BASE_URL;?>assets/images/insta.png" />
						<img class="icons" src="<?php echo BASE_URL;?>assets/images/tiktok.png" />
					</div>
				</div>
				</div>
		<div class="header">
			<div class="header_int">
				<div class="header_int_left">Coloque sua Logo aqui</div>
				<div class="header_int_right">
					<ul>
						<a href="<?php echo BASE_URL;?>home"><li>HOME</li></a>
						<a href="<?php echo BASE_URL;?>portfolio"><li>PORTFOLIO</li></a>
						<a href="<?php echo BASE_URL;?>servicos"><li>SERVIÇOS</li></a>
						<a href="<?php echo BASE_URL;?>sobre"><li>SOBRE</li></a>
						<a href="<?php echo BASE_URL;?>contato"><li>CONTATO</li></a>
					</ul>
				</div>
				
			</div>
		</div>
		<?php $this->loadViewInTemplate($viewname);?>
		<footer id="footer">
			<div class="footer_int">
				<div class="footer_box">
					<div class="footer_termos">
						<div class="footer_block"><a href="#">Termos de uso</a></div>
						<div class="footer_block"><a href="#">Políticas de privacidade</a></div>
						<div class="footer_block"><a href="#">Políticas de Cookies</a></div>
					</div>
				</div>
					<div class="footer_box">
						<div class="footer_termos">
						<div class="footer_block"><a href="#">Rua Affonso Titz, 360. Três Rios do Sul</a></div>
						<div class="footer_block"><a href="#">seuemail@hotmail.com</a></div>
						<div class="footer_block"><a href="#">(99)9 9999 - 9999</a></div>
					</div>
					</div>
						<div class="footer_box">
							<div class="footer_termos ">
								<div class="footer_block"><a href="#">Trabalhe Conosco</a></div>
								<div class="footer_block"><a href="#">Contato</a></div>
						<div class="footer_icon"><a href="#"><img class="icons" src="<?php echo BASE_URL;?>assets/images/faceicon.png" /></a></div>
						<div class="footer_icon"><a href="#"><img class="icons" src="<?php echo BASE_URL;?>assets/images/insta.png" /></a></div>
						<div class="footer_icon"><a href="#"><img class="icons" src="<?php echo BASE_URL;?>assets/images/tiktok.png" /></a></div>
					</div>
						</div>
			</div>
		</footer>
		<script type="text/javascript" src="<?php echo BASE_URL;?>assets/js/script.js"></script>
	</body>
</html>