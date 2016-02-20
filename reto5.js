'use strict';


function main(){
	console.log("RETO-05");
	var arr=['LUIS','PEDRO','JUAN','MIGUEL','GABRIEL','FRANK','EDUARDO','JOSE'];
	var name='juan',temp;
	temp=findName(name,arr);
	if(temp==-1)
		console.log('NO SE ENCONTRO EL ELEMENTO, POR LO TANTO NO SE MUESTRA EL INDICE');
	else
		console.log('NOMBRE A BUSCAR: '+name+'- ESTA EN LA POSICION (INDICE): '+temp);
}

function findName(nam,arre){
	var a=nam.toUpperCase();
	return arre.indexOf(a);
}

main();
//usar indexOf()