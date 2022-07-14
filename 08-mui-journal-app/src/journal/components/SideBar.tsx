import { TurnedInNot } from '@mui/icons-material'
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { purpleTheme } from '../../theme/purpleTheme'
import { useSelector } from 'react-redux';

interface Props {
  drawerWidth: number
}

export const SideBar = ({ drawerWidth }: Props) => {
  const { displayName } = useSelector<any,any>(state => state.auth);
  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 }}}
    >
      <Drawer
        variant="permanent"
        open
        color='primary.main'
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
        }}
      >
        <Toolbar
          style={{ backgroundColor: purpleTheme.palette.primary.main, color: 'white'}}
        >
          <Typography variant="h6" noWrap component="div">{ displayName }</Typography>
        </Toolbar>
        <Divider />
        <List>
          {
            ['Enero', 'Febrero', 'Marzo', 'Abril'].map(text => (
              <ListItem key={ text } disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <TurnedInNot />
                  </ListItemIcon>
                  <Grid container>
                    <ListItemText primary={ text } />
                    <ListItemText secondary={ 'Et ullamco id ut aliquip velit duis quis aliquip id nostrud cillum aliqua eu voluptate.' } />
                  </Grid>
                </ListItemButton>
              </ListItem>
            ))
          }
        </List>
      </Drawer>
    </Box>
  )
}
