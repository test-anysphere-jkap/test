import { TetrisApp } from "./components/TetrisApp.js";

function bootstrap() {
  const root = document.getElementById("tetris-root");
  if (!root) {
    return;
  }
  const app = new TetrisApp(root);
  app.mount();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", bootstrap);
} else {
  bootstrap();
}
