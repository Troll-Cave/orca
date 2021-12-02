import {AppBar, Button, IconButton, Toolbar, Typography} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import * as React from 'react';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

import './app-orca.module.scss';
import {AppPlugin} from "@troll-cave/orca-plugin-tools";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import {AppCatalog} from "@troll-cave/app-catalog";
import {useAuth0} from "@auth0/auth0-react";

/* eslint-disable-next-line */
export interface AppOrcaProps {
  plugins: AppPlugin[]
}

export function AppOrca(props: AppOrcaProps) {
  const [open, setOpen] = React.useState(false);
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  const flipDrawer = () => {
    setOpen(!open);
  };

  const drawerWidth = 240;

  const headerButton = isAuthenticated ?
    <Button color="inherit" onClick={() => logout()}>Logout</Button> :
    <Button color="inherit" onClick={() => loginWithRedirect()}>Login</Button>

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
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {props.plugins[0].name}
          </Typography>
          {headerButton}
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
              <Link to="/catalog">Catalog</Link>
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
        <Routes>
          <Route path="/catalog" element={<AppCatalog />} />
        </Routes>
      </Box>
    </Box>
  );
}

export default AppOrca;
