import App from "./component/App.js";
import { attach } from "./store/store.js";

attach(App, document.getElementById("root"))

document.getElementById('form').preventDefault()