
import { Link as RouterLink } from 'react-router-dom'
import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import { Google } from '@mui/icons-material'

export const LoginPage = () => {
  return (
    <Grid 
      container
      spacing={ 0 }
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4}}
    >
      <Grid
        item
        className='box-shadow'
        xs={ 3 }
        sx={{ backgroundColor: 'white', padding: 4, botderRadius: 10 }}
      >
        <Typography variant="h5" sx={{ mb: 2 }}>Login</Typography>
        <form>
          <Grid container>
            <Grid item xs={ 12 }>
              <TextField 
                label="Correo"
                type="email"
                placeholder="correo@gmail.com"
                fullWidth
              />
            </Grid>
            <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <TextField 
                label="Contraseña"
                type="password"
                placeholder="********"
                fullWidth
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
      </Grid>
    </Grid>
  )
}
