import { Grid, Typography, Button, TextField } from '@mui/material';
import { SaveOutlined } from '@mui/icons-material';
import { ImageGallery } from '../components';
import { useDispatch, useSelector } from 'react-redux';
import { useMemo, SyntheticEvent } from 'react';
import { useForm } from '../../hooks';

export const NoteView = () => {
  const dispatch = useDispatch<any>();
  const { activeNote: note } = useSelector<any, any>(state => state.journal);

  const { formState, handleInputChange } = useForm(note);

  const { title, body } = formState;

  const dateString = useMemo(() => {
    const newDate = new Date(note.date!);
    return newDate.toUTCString();
  }, [note.date]);

  const onSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
  }

  return (
    <Grid
      container
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      sx={{ mb: 1 }}
    >
      <Grid item>
        <Typography fontSize={ 39 } fontWeight="light" >{ dateString }</Typography>
      </Grid>
      <Grid item>
        <Button 
          variant="contained"
          onClick={ onSubmit }  
        >
          <SaveOutlined sx={{ fontSize: 30, mr: 1 }}/>
          <Typography>Guardar</Typography>
        </Button>
      </Grid>

      <Grid container>
        <TextField 
          type="text"
          value={ title }
          variant='filled'
          fullWidth
          onChange={ ({target}) =>  handleInputChange(target.value, 'title')}
          placeholder='Ingrese un título'
          label="Título"
          sx={{ border: 'none', mb: 1 }}
        />
        <TextField 
          type="text"
          value={ body }
          variant='filled'
          fullWidth
          multiline
          onChange={ ({target}) =>  handleInputChange(target.value, 'body')}
          placeholder='¿Qué sucedió el día de hoy?'
          label="Descripción"
          minRows={ 5 }
        />
      </Grid>
      <Grid container>
        <ImageGallery />
      </Grid>
    </Grid>
  )
}
