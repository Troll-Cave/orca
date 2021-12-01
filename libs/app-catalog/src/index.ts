import {AppPlugin} from "@troll-cave/orca-plugin-tools";

export * from './lib/app-catalog';

export function makeCatalogPlugin(config: Record<string, string>): AppPlugin {
  return {
    name: config.name || "bro"
  }
}
