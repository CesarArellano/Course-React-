import { ReactJSXElement } from '@emotion/react/types/jsx-namespace'
import { Box } from '@mui/system'

interface Props {
  children: ReactJSXElement;
}

const drawerWidth = 240;

export const JournalLayout = ({ children }: Props) => {
  return (
    <Box sx={{ display: 'flex' }}>
      {/* Navbar */}

      {/* Sidebar */}

      <Box
        component='main'
        sx={{ flexGrow: 1, p: 3 }}
      >
        {/* Toolbar */}
        { children }
      </Box>
    </Box>
  )
}
