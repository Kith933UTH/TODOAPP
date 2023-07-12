import html from "../store/core.js"

function TodoItem(todo, index, editingIndex) {
    console.log(todo, index, editingIndex)
    return html`<li class="todo-item completed">
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
`
}







{/* <li class="todo-item ${todo.completed && 'completed'}"
<div class="todo-item-view">
  <input
    type="checkbox"
    id="toggle-completed"
    class="toggle-completed"
    onchange="dispatch('toggleCompleted', ${index})"
    ${todo.completed && 'checked'}
  />
  <div class="todo-item-wrap-content">
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
    placeholder="Change me"
  />
  <input
    type="text"
    class="editing-description"
    placeholder="Change me"
  />
</div>
</li> */}
export default TodoItem