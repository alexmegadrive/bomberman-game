import { Model, model } from "./model/index.js";
import { View, view } from "./view/index.js";

class App {
  view: View;
  model: Model;
  constructor(view: View, model: Model) {
    this.view = view;
    this.model = model;
  }
}
const app = new App(view, model);

app.view.start.renderUI();

window.addEventListener('unload', async () => {
  await model.saveToBd();
});
