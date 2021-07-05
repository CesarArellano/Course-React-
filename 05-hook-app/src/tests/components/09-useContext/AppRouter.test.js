import { shallow, mount } from "enzyme";
import { AppRouter } from "../../../components/09-useContext/AppRouter";
import { UserContext } from "../../../components/09-useContext/UserContext";

describe('Testing with AppRouter', () => {
  const user = {
    id: 1,
    name: 'César'
  };

  const wrapper = mount(
    <UserContext.Provider value={{
      user
    }}>
      <AppRouter />
    </UserContext.Provider>
  );
  test('should show correctly', () => {
    expect(wrapper).toMatchSnapshot();
  })
  
})
