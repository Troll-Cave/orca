import * as React from 'react';
import {AppOrca} from "@troll-cave/app-orca";
import {addPlugin, getPlugins} from "@troll-cave/orca-plugin-tools";
import {makeCatalogPlugin} from "@troll-cave/app-catalog";

// basically this should be all you need to set up is these configs
// most will likely not need any extra config (likely just auth and axios need extra bits)
addPlugin(makeCatalogPlugin);

export function App() {
  return <AppOrca plugins={getPlugins()} />
}

export default App;
