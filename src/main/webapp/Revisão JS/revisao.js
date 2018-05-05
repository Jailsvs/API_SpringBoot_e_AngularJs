
function novoContato(){
	
	var elListaContatos = document.getElementById("listaContatos");
	
	var labelContato = document.createElement("label");	
	labelContato.innerText = "Contato: ";

	var inputContato = document.createElement("input");	
    inputContato.setAttribute("name", "txtContato");

	var br = document.createElement("br");	

	var btnExc = document.createElement("input");	
	btnExc.setAttribute("type", "button");
	btnExc.setAttribute("value", "-");
	btnExc.onclick=function(){ //btnExc.onclick=excluir; 
		elListaContatos.removeChild(divLinha);
		window.alert("Contato removido com sucesso!");
	};

	var divLinha = document.createElement("div");
	divLinha.appendChild(labelContato);
	divLinha.appendChild(inputContato);
	divLinha.appendChild(btnExc);
	divLinha.appendChild(br);	
	
	elListaContatos.appendChild(divLinha);
} 	


function imprimirDados(){
    //var contato = document.Forms
    var arrInputsContatos = document.frmContatos.txtContato; //document.forms[0].txtContato;
    var elSaidaContatos = document.getElementById("saidaContatos");
    var saida = "";
    for (i = 0; i < arrInputsContatos.length; i++) {
        saida = saida + arrInputsContatos[i].value + "<br>";
    }
    elSaidaContatos.innerHTML = saida;
    //console.log();
}