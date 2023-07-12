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
      <div class="todo-item-wrap-content" ondblclick="dispatch('enableEditing', ${index})">
        <span class="todo-item-content" >${todo.title}</span>
        <span class="todo-item-description">${todo.description}</span>
      </div>
      <button 
        class="destroy"
        onclick="dispatch('destroy', ${index})"
      >+</button>
    </div>
    <group class="editing">
      <input
        type="text"
        class="editing-content"
        value="${todo.title}"
        onkeyup="((event.keyCode === 27 && dispatch('disableEditing'))|| (event.keyCode === 13 || event.keyCode === 40 ) && this.nextElementSibling.focus())"
        onblur="dispatch('disableEditing')"
      />
      <input
        type="text"
        class="editing-description"
        value="${todo.description}"
        onblur="dispatch('disableEditing')"
        onkeyup="(event.keyCode === 27 && dispatch('disableEditing'))||((event.keyCode === 38) && this.previousElementSibling.focus())"
        onkeydown="(event.keyCode === 13) && dispatch('editing', ${index}, this.previousElementSibling.value, this.value)"
      />
    </group>
  </li>
`
}

export default TodoItem