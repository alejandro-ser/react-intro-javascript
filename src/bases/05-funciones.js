// Funciones en JS

// const saludar = function( nombre ) {
//   return `Hola, ${ nombre }`;
// }

const saludar2 = ( nombre ) => {
  return `Hola, ${ nombre }`;
}

const saludar3 = ( nombre ) => `Hola, ${ nombre }`;
const saludar4 = () => `Hola mundo`;

console.log( saludar2('Goku') );
console.log( saludar3('Vegeta') );
console.log( saludar4() );

const getUser = () => ({
  uid: 'ABC123',
  username: 'alejosegi'
});

const user = getUser();
console.log(user);

const getUsuarioActivo = ( nombre ) => ({
  uid: 'ABC456',
  username: nombre
});

const usuarioActivo = getUsuarioActivo('Alejo');
console.log( usuarioActivo );