import '@testing-library/jest-dom';
import { getUser, getUserIsActive } from '../../base/05-funciones';

describe('Test in 05-funciones', () => {
  test('getUser must return one object', () => {
    const userTest = {
      uid: 'ABC123',
      username: 'RayWayDay'
    };
    const user = getUser();
    expect(user).toEqual(userTest);
  });

  test('getUserIsActive must return one object', () => {
    const username = 'RayWayDay';
    const user = getUserIsActive(username);
    expect(user).toEqual({
      uid: 'ABC567',
      username
    });
  });
  
})
