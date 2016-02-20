'use strict';
function main(){
	console.log("RETO-03");
	var str='tres millones ciento cuarenta y tres mil ochocientos cuarenta y tres',str1='';
	str1=replaceAll(str);
	console.log(str1);
}

function replaceAll(cad){
	var cad_new=cad.replace(/tres/g,'nueve');
	return cad_new;
}


main();