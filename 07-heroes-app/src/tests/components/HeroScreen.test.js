import { mount } from 'enzyme';
import { MemoryRouter, Route } from 'react-router-dom';
import { HeroScreen } from '../../components/heroes/HeroScreen';

describe('Testing Hero Screen Component', () => {
  const historyMock = {
    length: 10,
    push: jest.fn(),
    goBack: jest.fn()
  }
  
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('Must show correctly', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={ ['/hero']}>
        <HeroScreen history={ historyMock }/>
      </MemoryRouter>
    );
    expect(wrapper.find('Redirect').exists()).toBe(true);
  });

  test('should show you a hero if the param exists and finds it', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={ ['/hero/marvel-spider'] }>
        <Route path="/hero/:heroId" component={ HeroScreen } />
      </MemoryRouter>
    );
    expect(wrapper.find('.row').exists()).toBe(true);
  });
  
  test('should go back to the last screen with PUSH', () => {
    const historyMock = {
      length: 1,
      push: jest.fn(),
      goBack: jest.fn()
    }

    const wrapper = mount(
      <MemoryRouter initialEntries={ ['/hero/marvel-spider'] }>
        <Route path="/hero/:heroId" component={ (props) => <HeroScreen history={ historyMock } /> } />
      </MemoryRouter>
    );
    wrapper.find('button').prop('onClick')();
    expect(historyMock.push).toHaveBeenCalledWith('/');
    expect(historyMock.goBack).not.toHaveBeenCalled();
  });

  test('should go back to the last screen with GoBack', () => {
    const historyMock = {
      length: 3,
      push: jest.fn(),
      goBack: jest.fn()
    }

    const wrapper = mount(
      <MemoryRouter initialEntries={ ['/hero/marvel-spider'] }>
        <Route path="/hero/:heroId" component={ () => <HeroScreen history={ historyMock } /> } />
      </MemoryRouter>
    );
    wrapper.find('button').prop('onClick')();
    expect(historyMock.push).toHaveBeenCalledTimes(0);
    expect(historyMock.goBack).toHaveBeenCalled();
  });

  test('should call Redirect if hero does not exist', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={ ['/hero/marvel-spider23423'] }>
        <Route 
          path="/hero/:heroId" 
          component={ () => <HeroScreen history={ historyMock } /> } 
        />
      </MemoryRouter>
    );
    expect(wrapper.text()).toBe('');
  });

})
