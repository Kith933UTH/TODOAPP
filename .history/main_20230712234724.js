import App from "./component/App.js";
import { attach } from "./store/store.js";

attach(App, document.getElementById("root"))
document.querySelectorAll('.todo-item').forEach((input) => console.log(input.classList))