import { retornaArreglo } from "../../base/07-deses-arr";

describe('Tests in 07-deses-arr', () => {
  test('Must return one string and one number', () => {
    const [ letters, numbers ] = retornaArreglo();
    expect(letters).toBe('ABC');
    expect(typeof letters).toBe('string');
    expect(numbers).toBe(123);
    expect(typeof numbers).toBe('number');
  });
});
