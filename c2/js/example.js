//create variables for the welcome message
var greeting = "Howdy ";
var name = "Molly ";
var message = ", please check your order:";
var welcome = greeting+name+message;

//create varibales to hold details about the sign
var sign ="Montague House";
var tiles = sign.length;
var subTotal = tiles * 5;
var shipping = 7;
var grandTotal = subTotal + shipping;

//Get the element that has an id of greeting

var el = document.getElementById("greetings");
el.textContent=welcome;

//get the dlement that has an id of usersign then update its content

var elSign = document.getElementById("usersign");
elSign.textContent = sign;

//Get the element that has an id of tiles then update its content

var elTiles = document.getElementById("tiles");
elTiles.textContent = tiles;

var elSubTotal=document.getElementById("subtotal");
elSubTotal.textContent = "$" + subTotal;

var elShipping = document.getElementById("shipping");
elShipping.textContent=shipping;

var elGrandTotal = document.getElementById("grandTotal");
elGrandTotal = "$"+grandTotal;