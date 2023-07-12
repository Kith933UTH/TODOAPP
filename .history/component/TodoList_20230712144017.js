import html from "../store/core.js"
import TodoItem from "./TodoItem.js"
import { connect } from "../store/store.js"

function TodoList({todos, editingIndex}) {
  console.log(todos, editingIndex)
    return html`
    <section class="main">
    <ul class="todo-list">
      <li class="todo-item completed">
        <div class="todo-item-view">
          <input
            type="checkbox"
            id="toggle-completed"
            class="toggle-completed"
          />
          <div class="todo-item-wrap-content">
            <span class="todo-item-content">Học Javascript</span>
            <span class="todo-item-description">Từ tháng 6 đến nay.</span>
          </div>
          <button class="destroy">+</button>
        </div>
        <div class="editing">
          <input
            type="text"
            class="editing-content"
            placeholder="Change me"
          />
          <input
            type="text"
            class="editing-description"
            placeholder="Change me"
          />
        </div>
      </li>
    </ul>
  </section>`
}

export default connect(state => ({todos: state.todos, editingIndex: state.editingIndex}))(TodoList)