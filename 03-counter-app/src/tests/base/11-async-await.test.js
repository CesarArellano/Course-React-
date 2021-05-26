import { getImagen } from "../../base/11-async-await";

describe('Tests with async-wait and fetch', () => {
  test('Must return image url', async () => {
    const url = await getImagen();
    expect(typeof url).toBe('string');
    expect(url.includes('https://')).toBe(true);
  });  
})
