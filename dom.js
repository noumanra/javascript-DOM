/*
// q1 i)
var elm1 = document.getElementById("main-content");
console.log(elm1);

// q1 ii)
var elm2 = document.getElementById("main-content").children;
console.log(elm2);

// q1 iiI)
var elm3 = document.getElementsByClassName("render")
for (var i = 0; i < elm3.length; i++) {
    console.log(elm3[i].innerHTML)
}

// q1 iv)
var elm4 = document.getElementById("first-name");
elm4.value = "Hamza";

// q1 v)
elm5 = document.getElementById("last-name")
elm5.value = "nouman";

elm6 = document.getElementById("email")
elm6.value = "Noumanabdulrauf@Gmail.com";
*/

// q2 i
var x = document.getElementById("form-content").nodeType;
console.log(x)


// q2 ii)
var f = "lastName"
var c = document.getElementById(f).nodeType;
console.log(c); //node type

var d = document.getElementById(f);
console.log(d.childNodes); //return chile nodes

// q2 iiI)
d.childNodes[1].innerHTML += "Shehzad"

// q2 iv)
var e = document.getElementById("main-content");
console.log(e.childNodes.length)
console.log(e.firstChild)
console.log(e.lastChild)

// q2 v)
console.log(d.nextSibling);
console.log(d.previousSibling);


// q4 vi)

var g = document.getElementById("email");
console.log(g.parentNode)
console.log(g.nodeType)