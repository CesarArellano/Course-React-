import { shallow } from 'enzyme';
import { HeroScreen } from '../../components/heroes/HeroScreen';

describe('Testing Hero Screen Component', () => {
  test('Must show correctly', () => {
    const wrapper = shallow(<HeroScreen />);
    expect(wrapper).toMatchSnapshot();
  })
  
})
