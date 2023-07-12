import html from "../store/core.js"
import { connect } from "../store/store.js"
function Header({todos, filters}) {
  console.log(todos, filters)
    return html`
      <header class="header">
        <input 
          type="checkbox" 
          id="toggle-all" 
          class="toggle-all" 
          onchange="dispatch('toggleAll', this.checked)"

          />
        <label for="toggle-all"></label>
        <form class="wrap-get-todo" id="form">
          <input
            type="text"
            class="get-todo"
            placeholder="What needs to be done?"
            id="get-todo"
            onkeyup="(event.keyCode === 13 || event.keyCode === 40 ) && this.nextElementSibling.focus()"
          />
          <input
            type="text"
            class="get-todo-description"
            placeholder="Some description?"
            id="get-todo-description" 
            onkeyup="(event.keyCode === 38) && this.previousElementSibling.focus()"
            onkeydown="(event.keyCode === 13) && dispatch('add', this.previousElementSibling.value, this.value)"
          />
        </form>
      </header>`
}

export default connect(state => ({todos: state.todos, filters: state.filters}))(Header)