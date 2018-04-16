
function impr(x){
	var nel=document.getElementById("entrada").value;
	externvalue=nel;
	 document.getElementById("entrada").value=nel+""+x;
}

function operlimpall(){
 document.getElementById("entrada").value="";
}
function operlimp(){
	var nel=document.getElementById("entrada").value;
	var newvalue="";
	for (var i = 0 ; i <nel.length-1; i++) {
		newvalue=newvalue+""+nel.charAt(i);
		
	}
	document.getElementById("entrada").value=newvalue;
}
function opercuadrado(){
     var nel=document.getElementById("entrada").value;
     var cuad=nel*nel;
     document.getElementById("entrada").value=cuad;
}
/*
cambiarlugar(x,y,v){
v=document.getElementById(x).value;
document.getElementById(y).value=v;
document.getElementById(y).value="";
}
*/
var f1=0;
var f2=0;
var op=0;
function operdiv(){
 f1=document.getElementById("entrada").value;
 document.getElementById("entrada").value="";
 op=document.getElementById("operacion1").value;
 
}
function operpor(x){
 f1=document.getElementById("entrada").value;
 document.getElementById("entrada").value="";
 op=document.getElementById("operacion2").value;
 
}
function opermenos(x){
 f1=document.getElementById("entrada").value;
 document.getElementById("entrada").value="";
 op=document.getElementById("operacion3").value;
 
}
function opermas(x){
 f1=document.getElementById("entrada").value;
 document.getElementById("entrada").value="";
 op=document.getElementById("operacion4").value;
 
}
function operigual(x){
 f2=document.getElementById("entrada").value;
 var fel=parseFloat(f2);
 switch(op){
 	case "/":
 	document.getElementById("entrada").value=f1/fel;
 	break;
 	case "x":
 	document.getElementById("entrada").value=f1*fel;
 	break;
 	case "-":
 	document.getElementById("entrada").value=f1-fel;
 	break;
 	case "+":
 	document.getElementById("entrada").value=f1+fel;
 	break;

 }
 
}