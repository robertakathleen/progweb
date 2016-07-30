var tabela = document.getElementById("tabela");
var i,j, vencedor, jogadorVez=0;

var imagem = new Image();
var imgBranco = new Image();
var imgX = new Image();
var imgO = new Image();

imgBranco.src="0.gif";
imgX.src="1.gif";
imgO.src="2.gif";

document.getElementById("jogador0").style.opacity=1;
document.getElementById("jogador1").style.opacity=.3;

/*
for (i = 0; i < 15; i++) { //linha
	var tr = document.createElement("tr");
	for (j =0; j < 15; j++){
		var td = document.createElement("td");		
		var image = new Image();
		image.src = "0.gif";
		td.appendChild(image);
		tr.appendChild(td);
		image.onclick=function (){clicado(i,j)};

	}
	tabela.appendChild(tr);
}
*/
function iniciar(){
	location.reload();
}


function clicado(id){
	var vazio = document.getElementById(id).src;
	if (vazio==imgBranco.src) {

		if(jogadorVez==0){
			document.getElementById(id).src = imgX.src;
			//image[15*i+j].src = imgX.src;
			
			if (verificaVencedor(jogadorVez)){
				window.alert("VENCEDOR: jogador 1");
				location.reload();
			}
			jogadorVez=1;

			document.getElementById("jogador0").style.opacity=.3;
			document.getElementById("jogador1").style.opacity=1;
		}
		else {
			document.getElementById(id).src = imgO.src;
			//image[15*i+j].src = imgO.src;
			//vencedor = verificaVencedor();
			if (verificaVencedor(jogadorVez)) {
				window.alert("VENCEDOR: jogador 2");
				location.reload();
			} else jogadorVez = 0;

			document.getElementById("jogador0").style.opacity=1;
			document.getElementById("jogador1").style.opacity=.3;
		}
	}
}

function verificaVencedor(jogadorVez){
	//console.log(document.getElementById("11").src);
	//console.log(imgX.src);

	if (verificaHorizontal(jogadorVez)) {
		return true;
	}else if (verificaVertical(jogadorVez)){
		return true;
	}else if (verificaDiagonal(jogadorVez)) {
		return true;
	} else return false;
}

function verificaHorizontal(jogadorVez){
	
	if (jogadorVez==0) {
		imagem.src = imgX.src;
	} else imagem.src = imgO.src;

	for (var i = 1; i <16; i++) {
		for (var j = 1; j<16; j++) {
			//if (cont >= 4) return true;
			if(document.getElementById(i+""+j).src == imagem.src){
				if(j+4<16){
					if((document.getElementById(i+""+(j+1)).src==imagem.src)&&(document.getElementById(i+""+(j+2)).src==imagem.src)&&(document.getElementById(i+""+(j+3)).src==imagem.src)&&(document.getElementById(i+""+(j+4)).src==imagem.src))
						return true;
				}
			}
		}	
	}
}

function verificaVertical(jogadorVez){
	
	if (jogadorVez==0) {
		imagem.src = imgX.src;
	} else imagem.src = imgO.src;

	for (var i = 1; i <16; i++) {
		for (var j = 1; j<16; j++) {
			//if (cont >= 4) return true;
			if(document.getElementById(i+""+j).src == imagem.src){
				if(i+4<16){
					if((document.getElementById((i+1)+""+j).src==imagem.src)&&(document.getElementById((i+2)+""+j).src==imagem.src)&&(document.getElementById((i+3)+""+j).src==imagem.src)&&(document.getElementById((i+4)+""+j).src==imagem.src))
						return true;
				}
			}
		}	
	}
}

function verificaDiagonal(jogadorVez){
	
	if (jogadorVez==0) {
		imagem.src = imgX.src;
	} else imagem.src = imgO.src;

	for (var i = 1; i <16; i++) {
		for (var j = 1; j<16; j++) {
			//if (cont >= 4) return true;
			if(document.getElementById(i+""+j).src == imagem.src){
				if((i+4<16)&&(j+4<16)){
					if((document.getElementById((i+1)+""+(j+1)).src==imagem.src)&&(document.getElementById((i+2)+""+(j+2)).src==imagem.src)&&(document.getElementById((i+3)+""+(j+3)).src==imagem.src)&&(document.getElementById((i+4)+""+(j+4)).src==imagem.src))
						return true;
				}
			}
		}	
	}
}

console.log(tabela);