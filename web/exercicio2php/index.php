<?php
	
	$nome = $_POST['nome'];
	$sexo = $_POST['sexo'];
	$cometarios = $_POST['comentarios'];
	
	$conn = mysql_connect("localhost", "root", "kat123");
	mysql_select_db("bancophp",$conn);
		
	$stmt = msql_query("INSERT INTO comentario(nome,sexo,comentarios) VALUES('$nome','$sexo','$comentarios')");
	header("Location: exercicio2php.html");

?>