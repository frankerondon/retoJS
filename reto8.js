'use strict';

function main(){
	console.log('RETO-08');
	var cortes=3;	
	var pedazos=hackPizza(cortes);
	console.log('Los numeros de pezados de pizza son: '+pedazos);
	
}

function hackPizza(n){
	var p=0;
	if(n%2!=0||n==0){
		p=(n*2)+1;
	}
	else if(n%2==0){
		p=(n*2);
	}
	return p;
	
}



main();