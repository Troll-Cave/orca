import {AppPlugin} from "@troll-cave/orca-plugin-tools";
import AppCatalog from "./lib/app-catalog";
import {ReactElement} from "react";

export * from './lib/app-catalog';

/**
 * @description If you want to replace the listing element it'll likely be
 * better to fully use a custom FE plugin and utilize the backend.
 */
export interface CatalogConfig {
  /**
   * @description the element used to allow people to edit their components.
   * I want to make a form building plugin as a post MVP but for now you'll need to make your own.
   */
  editElement: ReactElement | null;
}

export function makeCatalogPlugin(config: CatalogConfig): AppPlugin {
  const element = AppCatalog({
    editElement: config.editElement
  });

  return {
    name: 'App Catalog',
    navChecker: (parent, annotations): boolean => {
      return parent === null;
    },
    rootNav: '/catalog',
    rootElement: element
  }
}
