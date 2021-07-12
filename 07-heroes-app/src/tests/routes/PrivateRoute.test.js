import { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import { PrivateRoute } from '../../routers/PrivateRoute';

describe('Testing in <PrivateRoute />', () => {
  const props = {
    location: {
      pathname: '/marvel'
    }
  };

  Storage.prototype.setItem = jest.fn();

  test('Should show the component isAuthenticated and save in localStorage', () => {
    const wrapper = mount(
      <MemoryRouter>
        <PrivateRoute
          isAuthenticated={ true }
          component={ () => <span> Ready! </span> }
          { ...props }
        /> 
      </MemoryRouter>
    );
    expect(wrapper.find('span').exists()).toBe(true);
    expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/marvel');
  });

  test("Shouldn't show the component", () => {
    const wrapper = mount(
      <MemoryRouter>
        <PrivateRoute
          isAuthenticated={ false }
          component={ () => <span> Ready! </span> }
          { ...props }
        /> 
      </MemoryRouter>
    );
    expect(wrapper.find('span').exists()).toBe(false);
  });
  
  
});
