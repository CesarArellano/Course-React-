import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';

describe('Testing with useFetchGifs Hook', () => {
  test('Must return initial state', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('One Punch'));
    const { data, loading } = result.current;
    await waitForNextUpdate(); // This function does a cleaning of the state, so that in the next test we can obtain the expected values.  console.log(data, loading);
    expect(data).toEqual([]);
    expect(loading).toBe(true);
  });

  test('Must return images array and loading in false', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('One Punch'));
    await waitForNextUpdate();
    const { data, loading } = result.current;
    expect(data.length).toBe(10);
    expect(loading).toBe(false);
  });
  
});
