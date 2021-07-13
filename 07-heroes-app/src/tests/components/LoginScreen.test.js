import { mount } from 'enzyme';
import { AuthContext } from '../../auth/AuthContext';
import { LoginScreen } from '../../components/login/LoginScreen';
import { types } from '../../types/types';

describe('Testing with <LoginScreen />', () => {
  const contextValue = {
    dispatch: jest.fn()
  }

  const historyMock = {
    push: jest.fn(),
    location: {},
    listen: jest.fn(),
    createHref: jest.fn(),
    replace: jest.fn()
  }

  const wrapper = mount(
    <AuthContext.Provider value={ contextValue }>
      <LoginScreen history={ historyMock } />
    </AuthContext.Provider>
  );

  test('Should show it correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should call dispatch in LoginScreen', () => {
    const handleClick = wrapper.find('button').prop('onClick');
    handleClick();
    expect(contextValue.dispatch).toHaveBeenCalledWith({
      type: types.login,
      payload: {
        name: 'César Arellano'
      }
    });
    expect(historyMock.replace).toHaveBeenCalled();
    localStorage.setItem('lastPath', '/dc');
    handleClick();
    expect(historyMock.replace).toHaveBeenCalledWith('/dc');
  });

});
