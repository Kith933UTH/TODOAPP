import html from "../store/core.js"
import TodoItem from "./TodoItem.js"
import { connect } from "../store/store.js"

function TodoList() {
    return html`
    <section class="main">
    <ul class="todo-list">
        ${TodoItem()}
        ${TodoItem()}
        ${TodoItem()}
        ${TodoItem()}
        ${TodoItem()}
        ${TodoItem()}
        ${TodoItem()}
        ${TodoItem()}
        ${TodoItem()}
    </ul>
  </section>`
}

export default connect(state => {todos: state.todos})(TodoList)