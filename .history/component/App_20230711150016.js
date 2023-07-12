import html from "../store/core.js"
import { connect } from "../store/store.js"
import Header from "./Header.js"
import TodoList from "./TodoList.js"
import Footer from "./Footer.js"

const connector = connect(state => ({
    todos: state.todos
}))

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

export default connector(App)