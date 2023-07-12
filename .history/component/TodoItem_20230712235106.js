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
      <div class="todo-item-wrap-content" ondblclick="dispatch('enableEditing', ${index}, ${todo.id}) || document.getElementById('edit-title${index}').focus()">
        <span class="todo-item-content" >${todo.title}</span>
        <span class="todo-item-description">${todo.description}</span>
      </div>
      <button 
        class="destroy"
        onclick="dispatch('destroy','${todo.id}')"
      >+</button>
    </div>
    <div class="editing">
      <group class="editing-group">
        <input
          id="edit-title${index}"
          type="text"
          class="editing-content"
          value="${todo.title}"
          onfocus="this.selectionStart = this.selectionEnd = this.value.length"
          onblur="this.nextElementSibling.focus()"
          onkeyup="((event.keyCode === 27 && dispatch('disableEditing')) || ((event.keyCode === 40 || event.keyCode === 13) && this.nextElementSibling.focus()))"
        />
        <input
          id="edit-description${index}"
          type="text"
          class="editing-description"
          value="${todo.description}"
          onfocus="this.selectionStart = this.selectionEnd = this.value.length"
          onkeydown="(event.keyCode === 13) && dispatch('editing', ${index}, this.previousElementSibling.value, this.value)"
          onkeyup="((event.keyCode === 38 && this.previousElementSibling.focus()) || (event.keyCode === 27 && dispatch('disableEditing')))"
        />
      </group>
      <button 
        class="confirm-edit"
        onclick="dispatch('editing', ${index}, document.getElementById('edit-title${index}').value, document.getElementById('edit-description${index}').value)"
      ></button>
    </div>
  </li>`
}

export default TodoItem