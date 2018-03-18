// Class
//
// credit: https://marijnhaverbeke.nl/talks/es6_falsyvalues2015
//
// Rewrite these two object types to use the class keyword,
// instead of direct prototype manipulation.

function Speaker(name, verb) {
  this.name = name;
  this.verb = verb || "says";
}

Speaker.prototype.speak = function(text) {
  console.log(this.name + " " + this.verb + " '" + text + "'");
}

function Shouter(name) {
  Speaker.call(this, name, "shouts");
}

Shouter.prototype = Object.create(Speaker.prototype);

Shouter.prototype.speak = function(text) {
  Speaker.prototype.speak.call(this, text.toUpperCase());
}

new Shouter("Dr. Loudmouth").speak("hello there");

