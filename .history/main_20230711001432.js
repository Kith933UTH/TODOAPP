import App from "./component/App.js";
import html from "./core.js";

const cars = ["BMW", "Porsche", "KIA"]

const h = html`
<ul>
    ${cars.map((car) => `<li> ${car} </li>`)}
</ul>`

console.log(h)