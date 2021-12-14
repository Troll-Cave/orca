import * as React from 'react';
import {AppOrca} from "@troll-cave/app-orca";
import {addPlugin, getPlugins} from "@troll-cave/orca-plugin-tools";
import {makeCatalogPlugin} from "@troll-cave/app-catalog";
import {BrowserRouter} from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

// basically this should be all you need to set up is these configs
// most will likely not need any extra config (likely just auth and axios need extra bits)
addPlugin(makeCatalogPlugin());

console.log(window.location.origin)
export function App() {
  return (
    <Auth0Provider domain="notavailable.auth0.com" clientId="1RCoLmdJrszem9go4HTEFAGEAV1BntON" redirectUri={window.location.origin}>
      <BrowserRouter>
        <AppOrca plugins={getPlugins()} />
      </BrowserRouter>
    </Auth0Provider>
  )
}

export default App;
