<?php

	$login = $_POST['login'];
	$senha = $_POST['senha'];
	
	if($login == "demo")
		if($senha == "demo")
			echo "<script type='text/javascript' > window.alert('SENHA E LOGIN CORRETOS');</script>";
			print("LOGIN E SENHA CORRETOS");
			header("Location: exercicio2php.html");
		else
			print("VERIFIQUE SE SENHA OU LOGIN ESTAO CORRETOS");
	else print("LOGIN INCORRETO");
?>