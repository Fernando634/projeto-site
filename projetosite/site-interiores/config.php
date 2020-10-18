<?php
require 'environment.php';

$config = array();


if(ENVIRONMENT == 'development') {

	define('BASE_URL', 'http://localhost/projetos/padroes_melhorados/interiores03/');
	$config['dbname'] = 'institucional';
	$config['host'] = 'localhost';
	$config['dbuser'] = 'root';
	$config['dbpass'] = '';

} else {

	define('BASE_URL', 'http://localhost/projetos/padroes/interiores_padrao/');
	$config['dbname'] = 'mvca';
	$config['host'] = 'localhost';
	$config['dbuser'] = 'root';
	$config['dbpass'] = '';
}
global $db;
try {

	$db = new PDO('mysql:dbname='.$config['dbname'].';host='.$config['host'],$config['dbuser'],$config['dbpass']);
	
	
} catch(PDOException $e) {

	echo "nao conectou: ".$e->getMessage();
	exit;
}


?>