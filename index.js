import { registerRootComponent } from "expo";
import App from "./App";

// registerRootComponent chama AppRegistry.registerComponent("main", () => App);
// Isso garante que o App rode no Expo Go e no build nativo
registerRootComponent(App);
