import { fetchWithoutToken } from "../../helpers/fetch"

describe('Testing with fetch.js', () => {
  test('fetchWithoutToken must work', async () => {
    const resp = await fetchWithoutToken('auth', { email: 'raywayday@gmail.com', password: '123456' }, 'POST');
    expect( resp instanceof Response ).toBe(true);

    const body = await resp.json();
    expect(body.ok).toBe(true);
  })
  
})
