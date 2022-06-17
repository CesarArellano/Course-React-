
import { Link as RouterLink } from 'react-router-dom'
import { Button, Grid, InputAdornment, Link, TextField, Typography } from '@mui/material'
import { AuthLayout } from '../layout/AuthLayout'
import { AccountCircle, Email, Google, Lock } from '@mui/icons-material'

export const RegisterPage = () => {
  return (
    <AuthLayout
      title="Register"
    >
      <form>
        <Grid container>
          <Grid item xs={ 12 } sx={{ mt: 1 }}>
            <TextField 
              label="Nombre completo"
              type="text"
              placeholder="César Arellano"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={ 12 } sx={{ mt: 2 }}>
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
          <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <Button variant="contained" fullWidth>
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
