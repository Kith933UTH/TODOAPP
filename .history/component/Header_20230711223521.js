import html from "../store/core.js"

function Header() {
    return html`
      <header class="header">
        <input 
          type="checkbox" 
          id="toggle-all" 
          class="toggle-all" />
        <label for="toggle-all"></label>
        <form class="wrap-get-todo">
          <input
            type="text"
            class="get-todo"
            placeholder="What needs to be done?"
            tabindex="2"
            id="get-todo"
            onblur="document.getElementById('get-todo-description').focus()"
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
        </form>
      </header>`
}

export default Header