// Karina Ionkina
// SoftDev2 pd7
// K8 -- Animation Nation
// 2018-03-04

var pic = document.getElementById("vimage");
var beep = document.getElementById("beep");
var circle = document.getElementById("circle");
var dvd = document.getElementById("dvd");

var oldX = null;
var oldY = null;


var directionx;
var directiony;

var last;
var DVDx;
var DVDy;


circle.addEventListener("click", function() {circle_animation();});
dvd.addEventListener("click", function() {setup();});

var circle_animation = function(){

    var sirkle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    sirkle.setAttribute("cx", 300);
    sirkle.setAttribute("cy", 300);
    sirkle.setAttribute("r", 20);
    pic.appendChild(sirkle);
    x = 20;
    decr = 1;
    setInterval( function() {
	    if (decr == 1){
		if (x == 0){
		    decr = 0;
		    x++;
		}
		else {
		    x--;
		}
	    }
	    else if (decr == 0){
		if (x > 60){
		    decr = 1;
		    x--;
		}
		else {
		    x++;
		}
	    }
	    sirkle.setAttribute("r", x); }
	
	, 30);
    }


    var dvd_animation = function(){
	
	setup();

    }


	var d_a_helper = function(){

	    clear();

	    console.log("running d_a_helper...");
		if (DVDx >= 550 || DVDx <= -50){
		    directionx *= -1;
		}
		if (DVDy >= 575 || DVDy <= -25){
		    directiony *= -1;
		}

	    DVDx += 3 * directionx;
	    DVDy += 3 * directiony;

	    var DVD = document.createElementNS('http://www.w3.org/2000/svg','image');
	    DVD.setAttributeNS('http://www.w3.org/1999/xlink','xlink:href', 'img.png');	    	    
	    var animate = document.createElementNS("http://www.w3.org/2000/svg", "animate");
	    DVD.setAttributeNS('http://www.w3.org/1999/xlink','xlink:href', 'img.png');
	    DVD.setAttributeNS(null, "x", DVDx);
	    DVD.setAttributeNS(null, "y", DVDy);
	    DVD.setAttributeNS(null, "width","100px");
	    DVD.setAttributeNS(null, "height","50px");
	    pic.appendChild(DVD);
	}

 var setup = function(){
     console.log("Running . . .");
     var DVD = document.createElementNS('http://www.w3.org/2000/svg','image');
     DVD.setAttributeNS('http://www.w3.org/1999/xlink','xlink:href', 'img.png');
     directionx = 1;
     directiony = -1;
     var startx = Math.floor(Math.random() * 600);
     var starty = Math.floor(Math.random() * 600);
     DVDx = startx;
     DVDy = starty;
     DVD.setAttributeNS(null, "x", DVDx);
     DVD.setAttributeNS(null, "y", DVDy);
     DVD.setAttributeNS(null, "width","100px");
     DVD.setAttributeNS(null, "height","50px");
     pic.appendChild(DVD);
     console.log("added");
	setInterval(function() { d_a_helper(); } , 30);
	}


beep.addEventListener("click", function() {
	var fc = pic.firstChild;
	while(fc){
	    pic.removeChild(fc);
	    fc = pic.firstChild;
	}
	oldX = null;
	oldY = null;
});

var clear = function(){
    var fc = pic.firstChild;
	while(fc){
	    pic.removeChild(fc);
	    fc = pic.firstChild;
	}
	oldX = null;
	oldY = null;
}