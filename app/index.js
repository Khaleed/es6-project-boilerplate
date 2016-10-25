"use strict";

let a = 1;

(function foo() {
    let a = 2;
    console.log(a);
}());

console.log(a);
