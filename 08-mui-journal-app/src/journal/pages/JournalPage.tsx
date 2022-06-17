import { AddOutlined } from '@mui/icons-material';
import { IconButton, Typography } from '@mui/material'
import { JournalLayout } from '../layout/JournalLayout';
import { NothingSelectedView, NoteView } from '../views';
export const JournalPage = () => {
  return (
    <JournalLayout>
      <>
        <NoteView />
        <IconButton
          size='large'
          sx={{
            transition: '0.8s all ease-out',
            color: 'white',
            backgroundColor: 'error.main',
            ':hover': {  backgroundColor: 'error.main', opacity: 0.9 },
            position: 'fixed',
            right: 20,
            bottom: 20
          }}
        >
          <AddOutlined sx={{ fontSize: 30 }}/>
        </IconButton>
      </>
    </JournalLayout>
  )
}
