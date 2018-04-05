// export default function hello() {
//   console.log('Hello from JS Module');
// }

function hello() {
  console.log('Bonjour JS Module');
}

function quoiDe9() {
  console.log('Quoi de neuf...');
}

const inc = (x)=>x+3;




//function isCanvas(){
//    var element = document.createElement('canvas');
//    return !!(element.getContext && element.getContext('2d'));
//}

const capLettre = (str) => str.replace(/^[a-z]/, x => x.toUpperCase());

export {hello, quoiDe9, inc, capLettre};