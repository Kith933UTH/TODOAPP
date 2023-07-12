import App from "./component/App.js";
import html from "./core.js";

const cars = ["BMW", "Porsche", "KIA"]

const h = html`
<h1> ${undefined} </h1>
<ul>
    ${cars.map((car) => `<li> ${car} </li>`)}
</ul>
`

console.log(h)