import html from "../store/core.js"
import { connect } from "../store/store.js"
import Header from "./Header.js"
import TodoList from "./TodoList.js"
import Footer from "./Footer.js"

function App({todos}) {
    return html`
    <div class="container ">
      <h1 class="title">todos</h1>
      <div class="todo-app ${todos.length > 0 || 'no-todo'}">
          ${Header()}
          ${TodoList()}
          ${Footer()}
      </div>
  </div> `
}

export default connect(state => ({todos: state.todos}))(App)