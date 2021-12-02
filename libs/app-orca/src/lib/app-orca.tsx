import {AppBar, Button, IconButton, Toolbar, Typography} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import * as React from 'react';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

import './app-orca.module.scss';
import {AppPlugin, getPlugins} from "@troll-cave/orca-plugin-tools";

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
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  const drawerWidth = 240;

  const nav = getPlugins()
    .filter(plugin => plugin.navChecker(null, []))
    .map((plugin, index) => (
      <ListItem key={index} button>
        <ListItemText>
          <Link to={plugin.rootNav || '/'}>{plugin.name}</Link>
        </ListItemText>
      </ListItem>
    ));

  const routes = getPlugins()
    .filter(plugin => plugin.navChecker(null, []))
    .map((plugin, index) => (
      <Route key={index} path={plugin.rootNav || '/'} element={plugin.rootElement} />
    ));

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
                      aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Orca
          </Typography>
          {headerButton}
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        anchor="left"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}>
        <Toolbar />
        <List>
          {nav}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Routes>
          {routes}
        </Routes>
      </Box>
    </Box>
  );
}

export default AppOrca;
