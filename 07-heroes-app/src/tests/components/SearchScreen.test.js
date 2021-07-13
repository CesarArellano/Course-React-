import { mount } from 'enzyme';
import { MemoryRouter, Route } from 'react-router-dom';
import { SearchScreen } from '../../components/search/SearchScreen';

describe('Testing with <SearchScreen />', () => {

  test('should show it correctly', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/search']}>
        <Route path="/search" component={ SearchScreen }/>
      </MemoryRouter>
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.alert-info').text().trim()).toBe('Search a hero');
  });

  test('should show to Batman and the input with value of queryString', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/search?q=batman']}>
        <Route path="/search" component={ SearchScreen }/>
      </MemoryRouter>
    );

    expect(wrapper.find('HeroCard').exists()).toBe(true);
    expect(wrapper.find('input').prop('value')).toBe('batman');
  });

  test('should show to Batman and the input with value of queryString', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/search?q=batman']}>
        <Route path="/search" component={ SearchScreen }/>
      </MemoryRouter>
    );

    expect(wrapper.find('HeroCard').exists()).toBe(true);
    expect(wrapper.find('input').prop('value')).toBe('batman');
  });
  
  test('should show a alert-danger if the query is incorrect', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/search?q=batman23423']}>
        <Route path="/search" component={ SearchScreen }/>
      </MemoryRouter>
    );

    expect(wrapper.find('.alert-danger').exists()).toBe(true);
  });
  

  test('should call the push', () => {
    const historyMock = {
      push: jest.fn(),
      location: {},
      listen: jest.fn(),
      createHref: jest.fn(),
      replace: jest.fn()
    }
    
    const wrapper = mount(
      <MemoryRouter initialEntries={['/search?q=batman23423']}>
        <Route path="/search" component={ () => <SearchScreen history={ historyMock } /> }/>
      </MemoryRouter>
    );
      
    wrapper.find('input').simulate('change', {
      target: {
        name: 'searchText',
        value: 'batman',
      }
    });

    wrapper.find('form').prop('onSubmit')({
      preventDefault(){}
    });

    expect(historyMock.push).toHaveBeenCalledWith(`?q=batman`);


  });
  

});
