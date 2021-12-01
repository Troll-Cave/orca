import {AppBar, IconButton, Toolbar, Typography} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import * as React from 'react';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

import './app-orca.module.scss';

/* eslint-disable-next-line */
export interface AppOrcaProps {}

export function AppOrca(props: AppOrcaProps) {
  const [open, setOpen] = React.useState(false);

  const flipDrawer = () => {
    setOpen(!open);
  };

  const drawerWidth = 240;

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="fixed" sx={{"zIndex": (theme) => theme.zIndex.drawer + 1}}>
        <Toolbar>
          <IconButton size="large"
                      edge="start"
                      color="inherit"
                      aria-label="menu"
                      onClick={flipDrawer}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div">
            Orca
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        anchor="left"
        open={open}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}>
        <Toolbar />
        <List>
          <ListItem button>
            <ListItemText>
              Bro
            </ListItemText>
          </ListItem>
          <ListItem button>
            <ListItemText>
              Whot
            </ListItemText>
          </ListItem>
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Typography paragraph>
          Bro
        </Typography>
      </Box>
    </Box>
  );
}

export default AppOrca;
