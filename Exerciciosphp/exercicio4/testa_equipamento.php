<?php
	
	include "equipamento1/Equipamento.php";
	include "equipamento2/EquipamentoSonoro.php";
	
	ini_set('display_errors',1);
	
	$equipamento = new Equipamento\Equipamento();
	$equipamentoSonoro = new \Equipamento\Sonoro\EquipamentoSonoro(8);
?>