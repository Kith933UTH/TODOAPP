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
            maxlength="65"
            onkeyup="event.keyCode === 13 && dispatch('add', this.value)"
          />
          <input
            type="text"
            class="get-todo-description"
            placeholder="Some description?"
            maxlength="80"
            onkeyup="event.keyCode === 13 && dispatch('add', this.value)"
          />
        </div>
      </header>`
}

export default Header