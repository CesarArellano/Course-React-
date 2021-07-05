import { renderHook, act } from '@testing-library/react-hooks';
import { useCounter } from '../../hooks/useCounter';

describe('Testing useCounter hook', () => {
  test('Must return default values', () => {
    const { result } = renderHook( () => useCounter() );
    expect( result.current.counter ).toBe(0);
    expect( typeof result.current.increment ).toBe('function');
    expect( typeof result.current.decrement ).toBe('function');
    expect( typeof result.current.reset ).toBe('function');
  });

  test('Must return default values', () => {
    const number = 8;
    const { result } = renderHook( () => useCounter(number) );
    expect( result.current.counter ).toBe(number);
  });

  test('Must increment in 1', () => {
    const number = 100;
    const { result } = renderHook( () => useCounter(number) );
    const { increment } = result.current;
    act(() => {
      increment();
    });
    const { counter } = result.current;
    expect(counter).toBe(number + 1);
  });

  test('Must decrement in 1', () => {
    const number = 100;
    const { result } = renderHook( () => useCounter(number) );
    const { decrement } = result.current;
    act(() => {
      decrement();
    });
    const { counter } = result.current;
    expect(counter).toBe(number - 1);
  });

  test('Must reset in 100', () => {
    const number = 100;
    const { result } = renderHook( () => useCounter(number) );
    const { reset } = result.current;
    act(() => {
      reset();
    });
    const { counter } = result.current;
    expect(counter).toBe(number);
  });
  
  
})
