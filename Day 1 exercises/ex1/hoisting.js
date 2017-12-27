// MY representation of the hoisting mechanisme
function C() {
	console.log("OOPS!");
}

function E(f) {
  var f
	console.log("E");
  f = F
	f();
}

function A() {
 console.log("A");
 B();
};

function G() {
  function H() {
		console.log("H");
		I();
	};
	console.log("G");
	H();
}

function d() {
	console.log("D");
	E();
}

function I() {
	console.log("I");
	J();
	J();
}

function B() {
	console.log("B");
	C();
};

function C() {
	console.log("C");
	D();
};
var A ;

var C;

var D;

var F;

var rest;

var J

D = d;


F = function() {
	console.log("F");
	G();
};

rest = "KLMNOPQRSTUVWXYZ".split("");

for (var i=0; i<rest.length; i++) {
	(function(i){
		// define the current function
		window[rest[i]] = function() {
			console.log(rest[i]);
			if (i < (rest.length-1)) {
				// TODO: call the next function
			}
		};
	})(i);
}

J = function() {
	J = function() {
		console.log("J");
		K();
	};
};

A();
