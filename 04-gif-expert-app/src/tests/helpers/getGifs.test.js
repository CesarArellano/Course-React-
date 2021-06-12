import { getGifs } from '../../helpers/getGifs';

describe('Testing getGifs Function', () => {
  test('Must Bring ten items', async () => {
    const gifs = await getGifs('One Punch');
    expect(gifs.length).toBe(10);
  });

  test('Must Bring zero items', async () => {
    const gifs = await getGifs('');
    expect(gifs.length).toBe(0);
  }); 
});
