import html from "../store/core.js"
import TodoItem from "./TodoItem.js"
import { connect } from "../store/store.js"

function TodoList({todos, editingIndex}) {
    return html`
    <section class="main">
    <ul class="todo-list">
        ${todos.map((todo, index) => TodoItem(todo, index))}
    </ul>
  </section>`
}

export default connect(state => ({todos: state.todos, editingIndex: state.editingIndex}))(TodoList)