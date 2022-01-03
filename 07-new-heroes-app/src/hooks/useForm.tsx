import { useState } from 'react'

export const useForm = <T extends Object >( initialState: T ) => {
  const [formValues, setFormValues] = useState(initialState);

  const reset = () => {
    setFormValues( initialState );
  }

  const handleOnChange = ( field: keyof T, value: string ) => {
    setFormValues({
      ...formValues,
      [field]: value // Corchetes para computar la propiedad, para reemplazar con el field.
    });
  };


  return {
    formValues,
    handleOnChange,
    reset
  };
}
