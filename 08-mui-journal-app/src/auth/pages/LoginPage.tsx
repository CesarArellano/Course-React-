
import { Link as RouterLink } from 'react-router-dom'
import { Button, Grid, InputAdornment, Link, TextField, Typography } from '@mui/material'
import { Email, Google, Lock } from '@mui/icons-material'
import { AuthLayout } from '../layout/AuthLayout'

export const LoginPage = () => {
  return (
    <AuthLayout
      title='Login'
    >
      <form>
          <Grid container>
            <Grid item xs={ 12 } sx={{ mt: 1 }}>
              <TextField 
                label="Correo"
                type="email"
                placeholder="correo@gmail.com"
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
                <Button variant="contained" fullWidth>
                  <Google/>
                  <Typography sx={{ ml: 1 }}>Google</Typography>
                </Button>
              </Grid>
              <Grid item xs={ 12 } sm={ 6 }>
                <Button variant="contained" fullWidth>
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
