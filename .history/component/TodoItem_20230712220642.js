import html from "../store/core.js"

function TodoItem(todo, index, editingIndex) {
    return html`<li class="todo-item ${todo.completed && 'completed'} ${(index === editingIndex) && 'enableEditing'}" id="${todo.id}">
    <div class="todo-item-view">
      <input
        type="checkbox"
        id="toggle-completed"
        class="toggle-completed"
        onchange="dispatch('toggleCompleted', '${todo.id}')"
        ${todo.completed && 'checked'}
      />
      <div class="todo-item-wrap-content" ondblclick="dispatch('enableEditing', ${index})">
        <span class="todo-item-content" >${todo.title}</span>
        <span class="todo-item-description">${todo.description}</span>
      </div>
      <button 
        class="destroy"
        onclick="dispatch('destroy','${todo.id}')"
      >+</button>
    </div>
    <div class="editing">
    <group>
      <input
        type="text"
        class="editing-content"
        value="${todo.title}"
        onkeydown="(event.keyCode === 13) && dispatch('editing', ${index}, this.value, this.nextElementSibling.value)"
        onkeyup="((event.keyCode === 27 && dispatch('disableEditing')) || (event.keyCode === 40) && this.nextElementSibling.focus())"
      />
      <input
        type="text"
        class="editing-description"
        value="${todo.description}"
        onkeydown="(event.keyCode === 13) && dispatch('editing', ${index}, this.previousElementSibling.value, this.value)"
        onkeyup="((event.keyCode === 38 && this.previousElementSibling.focus()) || (event.keyCode === 27 && dispatch('disableEditing')))"
      />
    </group>
    </div>
  </li>`
}

export default TodoItem