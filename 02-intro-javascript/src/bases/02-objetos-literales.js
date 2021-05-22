const persona = {
  name: 'Tony',
  apellido: 'Stark',
  edad: 45,
}

const persona2 = { ...persona };

persona2.name = "Peter";

console.log(persona);
console.log(persona2);