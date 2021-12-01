export interface AppPlugin {
  name: string
}

const plugins: AppPlugin[] = [];

export function addPlugin(factory: (config: Record<string, string>) => AppPlugin, config: Record<string, string> = {}): void {
  plugins.push(factory(config));
}

export function getPlugins(): AppPlugin[] {
  return plugins;
}
