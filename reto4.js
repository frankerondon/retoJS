'use strict';
var odds=0;

function main(){
	//n=quantity numbers of fibo 
	var n=7;
	fibonacciRecursive(n);
	console.log('Elemento impares en la serie de Fibonacci: '+odds.toString())
}

function fibonacciRecursive(n){
	if(n==0||n==1)
		return n;
	else{
		searchOdd(n);
		return fibonacciRecursive(n-1)+fibonacciRecursive(n-2);
	}

}

function searchOdd(n){
	var b=false;
	if(n%2!=0&&n!=1)
		odds++;
	else if(n==1&&!b){
		odds++;
		b=true;
	}
}

main();