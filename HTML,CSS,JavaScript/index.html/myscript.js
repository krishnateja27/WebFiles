function myFunction() {
    document.getElementById('demo1').innerHTML = 5 + 6;
}
function myAlertFunction() {
    alert("Hi this the message\
that will be displayed.");
}
var x, y, z;
x = 1;
y = 2;
z = x + y;
document.getElementById("demo2").innerHTML = z;
var a = 16 + 11 + "krishna";
document.getElementById("demo3").innerHTML = a;
var b = "krishna" + 16 + 11;
document.getElementById("demo4").innerHTML = b;
y = 123e5;
document.getElementById("demo5").innerHTML = y;
var c = 123e-5;
document.getElementById("demo6").innerHTML = c;
x = 5; y = 5; z = 6;
document.getElementById("demo7").innerHTML = (x == y) + "<br>" + (x == z);
var names = ['krishna', 'teja', 'thirukovela'];
document.getElementById('demo8').innerHTML = names[1];
document.getElementById('demo9').innerHTML = typeof (3);
var chandan;
document.getElementById('demo10').innerHTML = chandan + "<br>" + typeof (chandan) + "<br>";
// You can also empty an object by setting it to undefined:
var person = { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" };
person = undefined;
document.getElementById("demo11").innerHTML = person;
document.getElementById("demo12").innerHTML =
    typeof undefined + "<br>" +
    typeof null + "<br><br>" +
    (null === undefined) + "<br>" +
    (null == undefined);
document.getElementById("demo13").innerHTML = typeof "john" + "<br>" +
    typeof 3.14 + "<br>" +
    typeof 'true' + "<br>" +
    typeof false + "<br>" +
    typeof x;
document.getElementById("demo14").innerHTML = typeof { name: "john", age: 3 } + "<br>" + typeof [1, 2, 3, 4];
document.getElementById("demo15").innerHTML = myFunction1(3, 4);
function myFunction1(a, b) {
    return a + b;
}
var ccs = {
    firstName: "ch",
    lastName: "singh",
    heights: function () {
        return 2;
    },
    non_height: function () {
        return this.firstName;
    },
    laname: "reeee"
}

function myhe(heights) {
    console.log(heights);
    return heights;
}
document.getElementById("demo16").innerHTML = ccs["firstName"] + "<br>" + ccs["lastName"] + "<br>" + ccs.heights() + "<br>" + ccs.non_height() + "<br>" + ccs.laname;
var person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566
};
// Display some data from the object:
document.getElementById("demo20").innerHTML =
    person["firstName"] + " " + person["lastName"];
var x = this;
document.getElementById("demo21").innerHTML = x;
// Create an object:
var person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    myFunction: function () {
        return this;
    }
};

// Display data from the object:
document.getElementById("demo22").innerHTML = person.myFunction();
var ram = {
    id: function () {
        return this.id;
    }
}
var kris = {
    id: "00001120"
}
var x = ram.id.call(kris);
document.getElementById("demo23").innerHTML = x;
var text = "asdksajdkdsajdkljadoiewufoiejvkjxvjdgdigouivvcdsfiuefvhjnveryu";
var length = text.length;
document.getElementById("demo24").innerHTML = length;
document.getElementById("demo25").innerHTML = "Hello \
Dolly!";
var d = "John";
var e = new String("Doe");
document.getElementById("demo26").innerHTML = (x === y);
var docu = "Hi please locateddfddd the 'please' in given string";
var i = docu.lastIndexOf('please');
document.getElementById('demo27').innerHTML = i;
var str = "Please locate where 'locate' occurs!";
var pos = str.search("locate");
document.getElementById("demo28").innerHTML = pos;
var str = "Apple, Banana, Kiwi";
var res = str.slice(-10, -4);
document.getElementById("demo29").innerHTML = res;
var res1 = str.slice(4);
document.getElementById("demo31").innerHTML = res1;
var str1 = "Please visit Microsoft";
var n = str1.replace('Microsoft', 'Zen3');
document.getElementById('demo32').innerHTML = n;
var n1 = str1.replace(/MICROSOFT/i, 'Zen3');
document.getElementById('demo33').innerHTML = n1;
var str2 = "Please visit MICROSOFT and MICROSOFT";
var n2 = str2.replace(/MICROSOFT/g, 'Zen3');
document.getElementById('demo34').innerHTML = n2;
var text1 = "Hello";
var text2 = "World";
var op = text1.concat(" ", text2);
document.getElementById('demo35').innerHTML = op;
var string1 = "Hi! is it raining?Rain";
var str3 = string1.match(/ain/g);
document.getElementById('demo36').innerHTML = str3;
var str = "krishna is black or white in colour";
var patt1 = /(black|white)/g;
var result = str.match(patt1);
document.getElementById("demo37").innerHTML = result;
var newsource = "My phone number is 12345679";
var result1 = newsource.match(/[8]/g);
document.getElementById('demo38').innerHTML = result1;
var result2 = "Give 110%W ";
var result3 = result2.match(/\d/g);
var result4 = result2.match(/\s/g);
document.getElementById('demo39').innerHTML = result3;
document.getElementById('demo40').innerHTML = result4;
var result5 = result2.match(/\b%/g);
document.getElementById('demo41').innerHTML = result5;
var result6 = result2.match(/\u0057/g);
document.getElementById('demo42').innerHTML = result6;
document.getElementById('demo43').innerHTML = /j/.exec("js is really nice");
document.getElementById('demo44').innerHTML = /j/.test("js is really nice");
var x = "kls" / "Apple";
document.getElementById("demo45").innerHTML = isNaN(x);
var y = 3 / 0;
document.getElementById("demo46").innerHTML = y;
var x = 0xF3;
document.getElementById("demo47").innerHTML = x;
var myNumber = 12;
document.getElementById("demo48").innerHTML = myNumber.toString(32);
var myexp = 9.5656;
document.getElementById('demo49').innerHTML = myexp.toExponential(0);
var x = new Date("13-10-3018");
document.getElementById("demo50").innerHTML = Number(x);
var text = "<ul>";
for (var i = 0; i < 3; i++) {
    text += "<li>" + i + "</li>";
}
text += "</ul>";
document.getElementById("demo50").innerHTML = text;
var number = [1, 2, 3, 4];
var te1 = "<br>";
number.forEach(element => {
    te1 += element + "<br>"
});
var te2 = 0 + "<br>";
number.forEach(myAdd);
document.getElementById("demo51").innerHTML = te1;
function myAdd(value) {
    if (value != 3)
        te2 += value + "<br>";
}
document.getElementById("demo52").innerHTML = te2;
document.getElementById("demo53").innerHTML = Array.isArray(number);
var names = ["rama", "krishna", "ravi"];
document.getElementById("demo54").innerHTML = names.constructor;
var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo55").innerHTML = fruits.constructor;
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Papaya");
fruits.shift();
fruits.unshift("Jamun");
document.getElementById("demo56").innerHTML = fruits.join();
var points = [40, 100, 1, 5, 25, 10];
points.sort(function (a, b) { return a - b });
document.getElementById("demo57").innerHTML = points.join();
points.sort(myComp);
document.getElementById("demo58").innerHTML = points.join();
function myComp(a, b) { return b - a };
document.getElementById("demo59").innerHTML = myArrayMin(points);
function myArrayMin(arr) {
    return Math.min.apply(null, arr);
}
var num1 = [45, 2, 5, 89, 7, 1];
var num2 = num1.map(mysqfunction);
function mysqfunction(value, index, arr) {
    return arr.length * arr.length;
}
document.getElementById("demo59").innerHTML = num2.join();
var num3 = [45, 2, 5, 89, 7, 1];
var num4 = num3.filter(mythreshold);
function mythreshold(value, index, arr) {
    return value > 10;
}
document.getElementById("demo60").innerHTML = num4.join();
var numbers1 = [45, 4, 9, 16, 25];
var te5 = 0;
var sum = numbers1.reduce(myFunction, 100);
function myFunction(total, value, index, array) {
    return total + value;
}
document.getElementById("demo61").innerHTML = sum;
var numbers = [45, 4, 9, 16, 25];
var soln = numbers.some(myFunction4);
function myFunction4(value, index, arr) {
    return value > 100;
}
document.getElementById("demo62").innerHTML = soln;
var d = new Date("2015");
document.getElementById("demo63").innerHTML = d;
var msec = Date.parse("March 21, 2012");
var d = new Date(msec);
document.getElementById("demo64").innerHTML = d;
document.getElementById("demo65").innerHTML = Date();
var da = new Date();
da.setDate(32);
document.getElementById("demo66").innerHTML = da;
document.getElementById("demo67").innerHTML = getRandomValue(1, 100);
function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var x = 5;
document.getElementById("demo68").innerHTML = x !== "5";
var str1 = "Hellooooo world!!Hello Zen3."
var pattern = str1.match(/o+/g);
var pattern1 = str1.match(/lo*/g);
var pattern2 = str1.match(/lo?/g);
document.getElementById('demo68').innerHTML = pattern;
document.getElementById('demo69').innerHTML = pattern1;
var person = { fname: "John", lname: "Doe", age: 25 };
var text10 = "";
for (var x in person) {
    text10 += person[x];
}
document.getElementById('demo70').innerHTML = text10;
document.getElementById('demo71').innerHTML = pattern2;
"use strict";
var evaluation = 3.14;
var str = "Is this all";
var patt1 = /is(?= all)/g;
var pattern3 = /s/g;
var patt4 = str.match(pattern3);
document.getElementById("demo72").innerHTML = patt4;
var patt5 = str.match(patt1);
document.getElementById("demo73").innerHTML = patt5;
var person = {
    firstName: "krishna",
    age: 22,
    language: "telugu",
    get lang() {
        return this.language;
    },
    set ageCount(age1) {
        this.age = age1;
    }
};
document.getElementById('demo74').innerHTML = person.lang;
person.ageCount = 12;
document.getElementById('demo75').innerHTML = person.age;
var counterObj = {
    counter: 100,
    get reset() {
        this.counter = 0;
    },
    set adder(value) {
        this.counter += value;
    },
    set subtracter(value) {
        this.counter -= value;
    },
    get increment() {
        this.counter++;
    },
    get decrement() {
        this.counter--;
    }
};
Object.defineProperty(counterObj, "mod10Counter", {
    get: function () {
        this.counter %= 10;
    }
});
Object.defineProperty(counterObj, "subtract", {
    set: function (value) { this.counter -= value; }
});
var person = {
    firstName: "John",
    lastName : "Doe",
    language : "EN" 
};
Object.defineProperty(person,"firstName",{writable:false});
Object.defineProperty(person,"firsName",{enumerable:false});
document.getElementById('demo77').innerHTML = Object.keys(person);
counterObj.reset;
counterObj.adder = 12;
counterObj.mod10Counter;
counterObj.increment;
counterObj.increment;
counterObj.increment;
counterObj.increment;
counterObj.increment;
counterObj.decrement;
counterObj.decrement;
counterObj.subtract = 10;

document.getElementById('demo76').innerHTML = counterObj.counter;