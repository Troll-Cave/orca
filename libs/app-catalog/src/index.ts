import {AppPlugin} from "@troll-cave/orca-plugin-tools";
import AppCatalog from "./lib/app-catalog";

export * from './lib/app-catalog';

export function makeCatalogPlugin(): AppPlugin {
  const element = AppCatalog({});
  return {
    name: 'App Catalog',
    navChecker: (parent, annotations): boolean => {
      return parent === null;
    },
    rootNav: '/catalog',
    rootElement: element
  }
}
