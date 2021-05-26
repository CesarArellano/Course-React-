import '@testing-library/jest-dom';

import { getSaludo } from '../../base/02-template-string';

describe('Test in 02-template-string.js', () => {
  test('getSaludo must be returns hola (name)', () => {
    const name = 'Fernando';
    const greetings = getSaludo(name);
    expect(greetings).toBe(`Hola ${name}`);
  });

  test('getSaludo must be return Hola Carlos whitout argument', () => {
    const greetings = getSaludo();
    expect(greetings).toBe('Hola Carlos');
  });
});
