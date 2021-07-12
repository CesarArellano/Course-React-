import { shallow, mount } from 'enzyme';
import { AuthContext } from '../../auth/AuthContext';
import { AppRouter } from '../../routers/AppRouter';

describe('Testing in <AppRouter />', () => {
  
  test('should show login if you are not authenticated ', () => {
    const contextValue = {
      dispatch: jest.fn(),
      user: {
        logged: false,
      }
    }

    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <AppRouter />
      </AuthContext.Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('should show marvel if you are authenticated ', () => {
    const contextValue = {
      dispatch: jest.fn(),
      user: {
        name: 'César',
        logged: true,
      }
    }

    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <AppRouter />
      </AuthContext.Provider>
    );
    
    expect(wrapper.find('.navbar').exists()).toBe(true);
  });
})
