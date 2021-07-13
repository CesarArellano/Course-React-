import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { HeroScreen } from '../../components/heroes/HeroScreen';

describe('Testing Hero Screen Component', () => {
  const historyMock = {
    length: 10,
    push: jest.fn(),
    goBack: jest.fn()

  }

  const wrapper = mount(
    <MemoryRouter initialEntries={ ['/hero']}>
      <HeroScreen history={ history}/>
    </MemoryRouter>
  );
  
  test('Must show correctly', () => {
    expect(wrapper.find('Redirect').exists()).toBe(true);
  })
  
})
