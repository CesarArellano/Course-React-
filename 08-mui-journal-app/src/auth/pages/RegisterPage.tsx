
import { Link as RouterLink } from 'react-router-dom'
import { Button, Grid, InputAdornment, Link, TextField } from '@mui/material'
import { AuthLayout } from '../layout/AuthLayout'
import { AccountCircle, Email, Lock } from '@mui/icons-material'
import { useForm } from '../../hooks'
import { SyntheticEvent } from 'react';

// export interface RegisterFormValidationsProps {
//   displayName?: (string | ((value: string) => boolean))[];
//   email?: (string | ((value: string) => boolean))[];
//   password?: (string | ((value: string) => boolean))[];
// }

const initialData = {
  displayName: '',
  email: 'cesarmauricio.arellano@gmail.com',
  password: '123456',
};

const formValidations = {
  displayName: [( value:string ) => value.length >= 1, 'El campo nombre es obligatorio.'],
  email: [( value:string ) => value.includes('@'), 'El campo correo debe tener un @.'],
  password: [( value:string ) => value.length >= 6, 'El campo correo debe tener más de 6 caracteres.'],
}

export const RegisterPage = () => {
  const { formState, handleInputChange, formValidation } = useForm(initialData, formValidations)
  const { displayName, email, password } = formState;

  const onSubmit = (e:SyntheticEvent) => {
    e.preventDefault();
    console.log(displayName,email,password);
    
  }
  const { displayNameValid , emailValid, passwordValid } = formValidation;

  console.log(formValidation);

  return (
    <AuthLayout
      title="Register"
    >
      <form
        onSubmit={ onSubmit }
      >
        <Grid container>
          <Grid item xs={ 12 } sx={{ mt: 1 }}>
            <TextField 
              label="Nombre completo"
              type="text"
              placeholder="César Arellano"
              value={ displayName }
              onChange={ ({target}) => handleInputChange(target.value, 'displayName')}
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
              error
              helperText="El nombre es obligatorio"
            />
          </Grid>
          <Grid item xs={ 12 } sx={{ mt: 2 }}>
            <TextField 
              label="Correo"
              type="email"
              placeholder="correo@gmail.com"
              fullWidth
              value={ email }
              onChange={ ({ target }) => handleInputChange(target.value, 'email')}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Email />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={ 12 } sx={{ mt: 2 }}>
            <TextField 
              label="Contraseña"
              type="password"
              placeholder="********"
              fullWidth
              value={ password }
              onChange={ ({ target }) => handleInputChange(target.value, 'password')}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <Button type="submit" variant="contained" fullWidth>
                Regístrate
              </Button>
            </Grid>
          <Grid 
            container
            direction="row"
            justifyContent="end"
            sx={{ mt: 2 }}
          >
            <Link component={ RouterLink } color="inherit" to="/auth/login">
              ¿Ya tienes cuenta? inicia sesión
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  )
}
