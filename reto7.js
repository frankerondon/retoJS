'use strict';

function main(){
	var version='1.5.9',n=0;
	console.log('RETO-07');	
	var new_version=nextVersion(version);
	console.log(new_version);
}

function nextVersion(ver){
	var ac=0,acv=0,v1,v2;
	var v=parseInt(ver.slice(-1));
	//console.log(v);
	//var v2_t=parseInt(ver.slice(-3));
	if(v==9){
		ac++;
		v=0;
		acv=parseInt(ver.slice(-3));
		acv+=ac;
	}
	else
		v++;
	if(ac!=1){
		v1=v.toString();
		ver=ver.replaceAt(ver.length-1,v1);
	}
	else{
		v1=v.toString();
		v2=acv.toString();
		ver=ver.replaceAt((ver.length-1),v1);
		ver=ver.replaceAt((ver.length-3),v2);
	}
	return ver;
}

String.prototype.replaceAt=function(index, character) {
    return this.substr(0, index) + character + this.substr(index+character.length);
}

	/*
	ver=ver.replaceAt((ver.length-1),'7');
	ver=ver.replaceAt((ver.length-3),'9');
	*/

main();