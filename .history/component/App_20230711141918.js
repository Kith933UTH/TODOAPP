import html from "../store/core.js"

import Header from "./Header.js"
import TodoList from "./TodoList.js"
import Footer from "./Footer.js"

function App() {
    return html`
    <div class="container">
    <h1 class="title">todos</h1>
    <div class="todo-app">
        ${Header()}
        ${TodoList()}
        ${Footer()}
    </div>
  </div> `
}

export default App