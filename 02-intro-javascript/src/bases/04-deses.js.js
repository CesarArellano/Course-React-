// Desestructuración.

const person = {
  name: 'Tony',
  age: 45,
  key: 'IronMan'
};

console.log(person);

const { name:name2, age, key } = person;  

console.log(name2, age, key);

const returnPerson = ({name, age, range = 'Cap'}) => {
  return {
    name,
    age,
    range,
    latlng: {
      lat: 14.21323,
      lng: 54.2123
    }
  };
};

const newPerson = returnPerson(person);

const { latlng:{ lat, lng }} = newPerson;

console.log(lat, lng);

const personajes = ['Goku', 'Veggeta', 'Trunks'];

const [ , element2, element3 ] = personajes;
console.log(element2, element3);