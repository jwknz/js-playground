// ({
//   plugins: ['jsdom-quokka-plugin'],
//   babel: true,
//   jsdom: {html: `<div id="app"></div>`}
// })

/*

  Hoisting => expressions vs declarations

  expressions => tied to a variable name, these need to be declared first.
  declarations => are declared when they are written, but not called.
  iife => immediately invoked function expression
  iife => (wrap function inside a set of parenthesis) calls the function immediately.

  if a function is tied to a variable it should return value, since you can call the variable
  if a function is not tied to a variable, it should be treated as a void function

*/

//console.log(quz)

quz = "Testing3"; /* var = undefined | nothing = not declared

/* Expressions - var are hoisted to the top of function scoped */
var app = document.querySelector('#app');  
app.innerHTML = "Test";

/* IIFE - called as soon as the file starts */
/* Used to scope variables */
(function foo3 () {
  
  var test = "This is a variable scoped to this function"
  console.log(test)
})();

/* Cannot call variables scoped inside of function */
//console.log(test)

foo1(); /* This works since it is a declaration */
// foo2(); /* This does not work since it is an expression */

function foo1 () {
  console.log("This is function foo1!")
}

var foo2 = () => {
  return "This is function foo2!"
}

foo1();
foo2(); /* This works since it is an expression that is declared */

//foo4(); // Does not work since it is an expression

var foo4 = function () {
  console.log("This is function foo4!")
}

foo4(); /* This works since it is an expression that is declared */

