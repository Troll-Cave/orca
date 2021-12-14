import {ReactElement} from "react";

export interface AppPlugin {
  name: string;
  navChecker: (parent: string | null, annotations: string[]) => boolean;
  rootNav?: string;
  rootElement?: ReactElement
}

const plugins: AppPlugin[] = [];

export function addPlugin(plugin: AppPlugin): void {
  plugins.push(plugin);
}

export function getPlugins(): AppPlugin[] {
  return plugins;
}
