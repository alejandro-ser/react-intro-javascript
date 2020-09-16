// Objetos literales

const persona = {
  nombre: 'Alejo',
  apellido: 'Giraldo',
  edad: 31,
  direccion: {
    ciudad: 'Manizales',
    zip: 170002,
    lat: 14.3232,
    lng: 34.56547687
  }
};

const persona2 = { ...persona };
persona2.nombre = 'Luis';

console.log( persona );
console.log( persona2 );