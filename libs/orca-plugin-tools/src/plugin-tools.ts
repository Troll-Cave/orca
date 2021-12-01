interface AppPlugin {
  name: string
}

const plugins: AppPlugin[] = [];

export function addPlugin(factory: () => AppPlugin): void {
  plugins.push(factory());
}

export function getPlugins(): AppPlugin[] {
  return plugins;
}
