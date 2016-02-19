'use strict';

function main(){
	console.log("RETO-01");
	var str_p='ilm',str_t='r,o,n',str_tr='';
	str_tr=translate(str_p);
	if(str_tr==str_t){
		str_t='ron';
		console.log('EL PROGRAMADOR QUIERE :'+str_t);
	}
	else
		console.log('-string: '+str_tr);
}

function translate(str){
	var rep=str,i=0,aux=[];
	var temp=readChar(0,rep,aux);
	return temp;

}

function readChar(n,str,aux){
	if(n>=str.length){
		return aux; 
	}
	else{
		if(str[n]=='i'||str[n]=='l'||str[n]=='m'){
			var a=str[n];
			if(a=='i')
				a='r';
			else if(a=='l')
				a='o';
			else if(a=='m')
				a='n';
			aux.push(a)
		return readChar(n+1,str,aux);
		}
		else{
			aux.push(str[n])
			return readChar(n+1,str,aux);
		}
	}
}

main();


