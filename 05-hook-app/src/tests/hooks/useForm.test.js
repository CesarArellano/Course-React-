import { renderHook, act } from '@testing-library/react-hooks';
import { useForm } from '../../hooks/useForm';

describe('Testing useForm hook', () => {
  const initialForm = {
    name: 'César',
    email: 'cesar@gmail.com'
  };

  test('Must return default values', () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [ formValues, handleInputChange, reset ] = result.current;
    expect(formValues).toEqual(initialForm);
    expect( typeof handleInputChange ).toBe('function');
    expect( typeof reset ).toBe('function');
  });

  test('Must change form values', () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [ , handleInputChange] = result.current;
    act(() => {
      handleInputChange({
        target: {
          name: 'name',
          value: 'Mauricio'
        }
      });
    });
    const [ formValues ] = result.current;
    expect(formValues).toEqual({...initialForm, name: 'Mauricio'} );
  });

  test('Must reset form values', () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [ , handleInputChange, reset ] = result.current;
    act(() => {
      handleInputChange({
        target: {
          name: 'name',
          value: 'Mauricio'
        }
      });
      reset();
    });
    const [ formValues ] = result.current;
    expect(formValues).toEqual(initialForm);
  });
  
  
})
