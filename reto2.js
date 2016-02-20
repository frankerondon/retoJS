'use strict';
process.stdin.setEncoding('utf8');

function main(){
	var num='';
	console.log('RETO-02');
	console.log('ESCRIBA N NUMEROS');
	process.stdin.on('readable', function() {
    num = process.stdin.read();
    if (num !== null) {
    	num+='\n'
        console.log(num);
        var b=validate(num); //si devuelve true es un numero q se ingresp
        if(b){
        	console.log('¡Mira, puedo escribir '+num+' sin usarlos!');
        }
        else
        	console.log('ERROR');
        
        process.exit();
    }
});
	
	
}

//validar si lo q se ingreso fue numeros
function validate(num){
	var n=(num.split(" ").pop());
	if (typeof(n)=='number')
		return true;
	else
		return false;
}


main();


//¡Mira, puedo escribir 1,2,3 y 667 sin usarlos!\n