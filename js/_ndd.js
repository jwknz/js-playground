/**

  * * plugin for quokka
  * >> ndd = null, declared, defined

*/

// ({
//   plugins: ['jsdom-quokka-plugin'],
//   babel: true,
//   jsdom: {html: `<div id="app"></div>`}
// })

var app = document.querySelector('#app');  
app.innerHTML = "NDD";

//let foo = bar + 1  //! bar = undeclared == forgot something

let bar; //INFO undefined

bar = null

//console.log(bar)

const baz = null;

console.log(typeof baz)