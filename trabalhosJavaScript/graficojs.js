botao = document.getElementById("botaoDesenha");

botao.onclick = function(){

	a1 = document.myform.a1.value;
	a2 = document.myform.a2.value;
	a3 = document.myform.a3.value;
	a4 = document.myform.a4.value;
	a5 = document.myform.a5.value;

	larg = document.myform.larg.value;

	document.myform.barra1.height = a1;
	document.myform.barra1.width = larg;
	document.myform.barra2.height = a2;
	document.myform.barra2.width = larg;
	document.myform.barra3.height = a3;
	document.myform.barra3.width = larg;
	document.myform.barra4.height = a4;
	document.myform.barra4.width = larg;
	document.myform.barra5.height = a5;
	document.myform.barra5.width = larg;

}
