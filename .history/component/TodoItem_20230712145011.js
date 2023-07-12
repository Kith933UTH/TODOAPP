import html from "../store/core.js"

function TodoItem(todo, index, editingIndex) {
    return html`<li class="todo-item ${todo.completed && 'completed'} ${(index === editingIndex) && 'enableEditing'}">
    <div class="todo-item-view">
      <input
        type="checkbox"
        id="toggle-completed"
        class="toggle-completed"
        onchange="dispatch('toggleCompleted', ${index})"
        ${todo.completed && 'checked'}
      />
      <div class="todo-item-wrap-content" ondblclick("dispatch('enableEditing', ${index})")>
        <span class="todo-item-content" >${todo.title}</span>
        <span class="todo-item-description">${todo.description}</span>
      </div>
      <button 
        class="destroy"
        onclick="dispatch('destroy', ${index})"
      >+</button>
    </div>
    <div class="editing">
      <input
        type="text"
        class="editing-content"
        value="${todo.title}"
      />
      <input
        type="text"
        class="editing-description"
        value="${todo.description}"
      />
    </div>
  </li>
`
}

export default TodoItem