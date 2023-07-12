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
            onkeyup="() => {
              event.keyCode === 9 ||
              event.keyCode === 13 ||
              event.keyCode === 39 ||
              event.keyCode === 40) && 
              this.nextElementSibling.focus()}"
          />
          <input
            type="text"
            class="get-todo-description"
            placeholder="Some description?"
            tabindex="1"
            id="get-todo-description"         
            onkeyup="
              event.keyCode === 9 ||
              event.keyCode === 38 ||
              event.keyCode === 37) && 
              this.previousElementSibling.focus()"
          />
        </form>
      </header>`
}

export default Header