import { renderHook } from '@testing-library/react-hooks';
import { useFetch } from '../../hooks/useFetch';

describe('Testing useFetch Hook', () => {

  test('Should return default information', () => {
    const { result } = renderHook(() => useFetch('https://www.breakingbadapi.com/api/quotes/1'));
    const { data, loading, error } = result.current;
    expect(data).toBe(null);
    expect(loading).toBe(true);
    expect(error).toBe(null);
  });

  test('Should return data correctly, loading in false and error in null ', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetch('https://reqres.in/apid/users?page=2'));
    await waitForNextUpdate({ timeout: 5000 });
    const { data, loading, error } = result.current;
    expect(data).toBe(null);
    expect(loading).toBe(false);
    expect(error).toBe("It couldn't load data");
  });
  
})
