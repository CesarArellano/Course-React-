import { shallow, mount } from "enzyme";
import { HomeScreen } from "../../../components/09-useContext/HomeScreen";
import { UserContext } from "../../../components/09-useContext/UserContext";

describe('Testing with HomeScreen', () => {
  const user = {
    name: 'César',
    email: 'cesarmauricio.arellano@gmail.com'
  };

  test('should show correctly', () => {
    const wrapper = mount(
      <UserContext.Provider value = {{
        user
      }}>

        <HomeScreen />
      </UserContext.Provider>
    );
    expect(wrapper).toMatchSnapshot();
  })
  
})
