<?php

namespace Equipamento\Sonoro;
final class EquipamentoSonoro extends Equipamento{
	
	public $volume;
	public $stereo;
	
	function mono(){
		$this->stereo = false;
	}
	
	function stereo(){
		$this->stereo = true;	
	}
	
	function setVolume($volume){
		$this->volume = $volume;
	}
	
}

?>