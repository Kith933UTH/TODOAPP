import html from "../store/core.js"
import TodoItem from "./TodoItem.js"
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
    </ul>
  </section>`
}

export default TodoList