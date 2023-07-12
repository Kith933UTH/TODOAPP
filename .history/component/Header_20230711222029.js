import html from "../store/core.js"

function Header() {
    return html`
      <header class="header">
        <input 
          type="checkbox" 
          id="toggle-all" 
          class="toggle-all" />
        <label for="toggle-all"></label>
        <div class="wrap-get-todo">
          <input
            type="text"
            class="get-todo"
            placeholder="What needs to be done?"
            tabindex="2"
            id="get-todo"
            onkeyup="event.keyCode === 13 && dispatch('switchInput', this.id, this.nextElementSibling.id)"
          />
          <input
            type="text"
            class="get-todo-description"
            placeholder="Some description?"
            tabindex="1"
            id="get-todo-description"
            onkeyup="event.keyCode === 13 && dispatch('add', this.value)"
          />
        </div>
      </header>`
}

export default Header