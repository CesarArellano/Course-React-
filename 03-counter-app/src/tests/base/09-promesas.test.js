import { getHeroeByIdAsync } from "../../base/09-promesas";
import heroes from '../../data/heroes';

describe('Test with Promises', () => {
  test('getHeroeByIdAsync must return a async heroe', ( done ) => {
    const id = 1;
    getHeroeByIdAsync( id )
      .then( heroe => {
        expect(heroe).toEqual(heroes[0]);
        done();
      });
  });  

  test("getHeroeByIdAsync must return error if the heroe doesn't exist", ( done ) => {
    const id = 20;
    getHeroeByIdAsync( id )
      .catch( error => {
        expect(error).toBe('No se pudo encontrar el héroe');
        done();
      });
  }); 
})
