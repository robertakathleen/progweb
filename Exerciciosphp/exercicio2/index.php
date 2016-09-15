<?php
	
	$usuario = "root";
	$senha = "root";
	
	$nome = $_POST['nome'];
	$sexo = $_POST['sexo'];
	$cometarios = $_POST['comentarios'];
	
	try{
		$conn = new PDO("mysql:host=localhost; dbname=bancophp", $usuario,$senha);
		$conn->exec("set names utf8");
		
		$stmt = $conn->prepare('INSERT INTO comentario(nome,sexo,comentarios) VALUES(:nome, :sexo, :comentarios)');
		$stmt->bindValue(':nome',$nome);
		$stmt->bindValue(':sexo',$sexo);
		$stmt->bindValue(':comentarios',$comentarios);
		
		$stmt->execute();
		
	}catch (PDOException $e){
		echo $e->getMessage();
	}
	
	/*$conn = mysql_connect("localhost", "root", "kat123");
	mysql_select_db("bancophp",$conn);
		
	$stmt = msql_query("INSERT INTO comentario(nome,sexo,comentarios) VALUES('$nome','$sexo','$comentarios')");
	header("Location: exercicio2php.html");*/

?>