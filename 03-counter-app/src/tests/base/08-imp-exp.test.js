import heroes from '../../data/heroes';
import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";

describe("Tests in Heroes's functions", () => {
  test('Must return a heroe by id', () => {
    const id = 1;
    const heroe = getHeroeById(id);
    const heroeData = heroes.find( h => h.id === id);
    expect(heroe).toEqual(heroeData);
  });

  test('Must return undefined if the heroe doesnt exist', () => {
    const id = 10;
    const heroe = getHeroeById(id);
    expect(heroe).toBe(undefined);
  });

  test('debe de retornar un arreglo con los heroes de DC', () => {
    const owner = 'DC';

    const heroesOwner = getHeroesByOwner(owner);

    const heroesOwnerData = heroes.filter(h => h.owner === owner);

    expect(heroesOwner).toEqual(heroesOwnerData);
  });

  test("Must return marvel heroe's lenght", () => {
    const owner = 'Marvel';
    const heroes = getHeroesByOwner(owner);
    expect(heroes.length).toEqual(2);
  });

  
})
