// const { JSDOM } = require( "jsdom" );
// const { window } = new JSDOM( "" );
const $ = require('jquery');

const randomColor = require('randomColor');

const sayHello = name => "Hello, " + name + "!";


console.log(sayHello("Andrew"));


$("#title").css("color", "white");
$("#title").html("Hello, Andrew!

$('body').css("background", randomColor());