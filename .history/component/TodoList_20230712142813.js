import html from "../store/core.js"
import TodoItem from "./TodoItem.js"
import { connect } from "../store/store.js"

function TodoList({todos}) {
    return html`
    <section class="main">
    <ul class="todo-list">
    </ul>
  </section>`
}
//${todos.map((todo, index) => TodoItem(todo, index))}


export default connect(state => ({todos: state.todos}))(TodoList)