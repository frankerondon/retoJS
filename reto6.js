'use strict';

function main(){
	console.log("RETO-06");
	var i=1,n=5,sum_n=0,aux=0;
	sum_n=sum(i,n,aux);
	var t=String(sum_n);
	console.log('RESULTADO SUMATORIA : '+t);
}


function sum(i,n,aux){
	if(i>n)
		return aux; 
	
	else{
		aux=aux+i;
		//console.log(aux);
		return sum(i+1,n,aux);
	}
}

main();