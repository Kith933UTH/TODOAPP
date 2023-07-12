import App from "./component/App.js";
import { attach } from "./store/store.js";

attach(App, document.getElementById("root"))


document.querySelectorAll('input[type="text"]').forEach((input) => {input.addEventListener('focus', () => {input.selectionStart = 4;
    input.selectionEnd = 13;})})