
import { Link as RouterLink } from 'react-router-dom'
import { Button, Grid, InputAdornment, Link, TextField, Typography } from '@mui/material'
import { Email, Google, Lock } from '@mui/icons-material'
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks';
import { SyntheticEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkingAuthentication, startGoogleSignIn } from '../../store/auth';
import { useMemo } from 'react';

export const LoginPage = () => {
  const { status } = useSelector<any, any>(state => state.auth);

  const isAuthenticating = useMemo(() => status === 'checking', [status]);

  const dispatch = useDispatch<any>();
  const { values, handleInputChange } = useForm({
    email: 'cesarmauricio.arellano@gmail.com',
    password: '12345'
  })

  const { email, password } = values;

  const onSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    console.log(email,password);
    dispatch( checkingAuthentication(email, password) )
  }

  const onGoogleSignIn = () => {
    console.log('onGoogleSignIn');
    dispatch( startGoogleSignIn() )
  }

  return (
    <AuthLayout
      title='Login'
    >
      <form onSubmit={ onSubmit }>
          <Grid container>
            <Grid item xs={ 12 } sx={{ mt: 1 }}>
              <TextField 
                label="Correo"
                type="email"
                value={ email }
                placeholder="correo@gmail.com"
                onChange={ (e) => handleInputChange(e.target.value, 'email') }
                fullWidth
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
                value={ password }
                onChange={ (e) => handleInputChange(e.target.value, 'password') }
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Lock />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid container spacing={ 1.5 }  sx={{ mt: 2 }}>
              <Grid item xs={ 12 } sm={ 6 }>
                <Button disabled={ isAuthenticating } variant="contained" fullWidth onClick={ onGoogleSignIn }>
                  <Google/>
                  <Typography sx={{ ml: 1 }}>Google</Typography>
                </Button>
              </Grid>
              <Grid item xs={ 12 } sm={ 6 }>
                <Button disabled={ isAuthenticating } type='submit' variant="contained" fullWidth>
                  Iniciar sesión
                </Button>
              </Grid>
            </Grid>

            <Grid 
              container
              direction="row"
              justifyContent="end"
              sx={{ mt: 2 }}
            >
              <Link component={ RouterLink } color="inherit" to="/auth/register">
                Crear una cuenta
              </Link>
            </Grid>
          </Grid>
        </form>
    </AuthLayout>
  )
}
