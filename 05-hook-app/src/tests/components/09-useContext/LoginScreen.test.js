import { shallow, mount } from "enzyme";
import { LoginScreen } from "../../../components/09-useContext/LoginScreen";
import { UserContext } from "../../../components/09-useContext/UserContext";

describe('Testing with HomeScreen', () => {
  const setUser = jest.fn();
  const wrapper = mount(
    <UserContext.Provider value={{
      setUser
    }}>
      <LoginScreen/>
    </UserContext.Provider>
  );
  test('should show correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should execute setUser function ', () => {
    wrapper.find('button').prop('onClick')();
    expect(setUser).toHaveBeenCalledWith({ id: 123, name:'César'});
  });

});