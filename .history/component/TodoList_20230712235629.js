import html from "../store/core.js"
import TodoItem from "./TodoItem.js"
import { connect } from "../store/store.js"

function TodoList({todos, editingIndex, filters, filter}) {
    return html`
    <section class="main">
    <ul class="todo-list">
      ${todos.filter(filters[filter]).map((todo, index) => TodoItem(todo, index, editingIndex))}
    </ul>
  </section>`
}

export default connect()(TodoList)