import App from "./component/App.js";
import { attach } from "./store/store.js";

attach(App, document.getElementById("root"))


console.log(document.querySelectorAll('input[type="text"]'))