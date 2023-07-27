export * from './src/button';
import type { App } from 'vue';
import FButton from './src/button.vue';

FButton.install = (app: App) => {
  app.component(FButton.name, FButton);
};

export { FButton };
export default FButton;
