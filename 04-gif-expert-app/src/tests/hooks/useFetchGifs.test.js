import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';

describe('Testing with useFetchGifs Hook', () => {
  test('Must return initial state', () => {
    const { result } = renderHook(() => useFetchGifs('One Punch'));
    const { data, loading } = result.current;

    console.log(data, loading);
    expect(data).toEqual([]);
    expect(loading).toBe(true);
  });
  
});
