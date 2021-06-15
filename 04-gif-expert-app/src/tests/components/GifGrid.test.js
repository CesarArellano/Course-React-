import { shallow } from "enzyme";
import '@testing-library/jest-dom';
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock('../../hooks/useFetchGifs');

describe('Testing GifGrid Component', () => {
  const category = 'One Punch';

  test('Must display correctly', () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true 
    });
    const wrapper = shallow(<GifGrid category = { category } />);
    expect(wrapper).toMatchSnapshot();
  });

  test('Must display items when loading images of useFetchGifs', () => {
    const gifs = [
      {
        id: '223123',
        url: 'https://i.blogs.es/65e246/traductor-de-google/450_1000.jpg',
        title: 'Google'
      },
      {
        id: '29879843',
        url: 'https://i.blogs.es/65e246/traductor-de-apple/450_1000.jpg',
        title: 'Apple'
      },
  ];
    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false
    });
    const wrapper = shallow(<GifGrid category = { category } />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('p').exists()).toBe(false);
    expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
  });
})
