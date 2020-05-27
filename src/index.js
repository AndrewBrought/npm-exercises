// const { JSDOM } = require( "jsdom" );
// const { window } = new JSDOM( "" );
const $ = require('jquery');

const randomColor = require('randomColor');

// const sayHello = name => "Hello, " + name + "!";

const sayHello = require('./say-hello');
console.log(sayHello("Andrew"));


$("#title").css("color", "grey");
$("#title").html("Hello, Andrew!");

$('body').css("background", randomColor());