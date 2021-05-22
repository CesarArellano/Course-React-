import { heroes } from './data/heroes'

const getHeroeId = (id) => heroes.find((heroe) => heroe.id === id);
const getHeroeOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner);

console.log(getHeroeId(2));
console.log(getHeroeOwner('DC'));
