import html from "../store/core.js"
import TodoItem from "./TodoItem.js"
import { connect } from "../store/store.js"

function TodoList({todos}) {
    return html`
    <section class="main">
    <ul class="todo-list">
        ${todos.map((todo) => TodoItem(todo))}
    </ul>
  </section>`
}

export default connect(state => ({todos: state.todos}))(TodoList)