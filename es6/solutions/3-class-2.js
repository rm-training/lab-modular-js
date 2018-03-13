// Class
//
// credit: https://marijnhaverbeke.nl/talks/es6_falsyvalues2015
//
// Rewrite these two object types to use the class keyword,
// instead of direct prototype manipulation.

class Speaker {

	constructor (name, verb = "says") {
	  this.name = name;
	  this.verb = verb;
	};

	speak (text) {
		console.log(
			`${this.name} ${this.verb} '${text}'`
		);
	};

};

class Shouter extends Speaker {

	constructor (name) {
		super(name, "shouts");
	};

	speak (text) {
		super.speak(text.toUpperCase());
	}

};

new Shouter("Dr. Loudmouth").speak("hello there");

