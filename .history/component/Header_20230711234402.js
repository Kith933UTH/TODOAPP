import html from "../store/core.js"

function Header() {
    return html`
      <header class="header">
        <input 
          type="checkbox" 
          id="toggle-all" 
          class="toggle-all" />
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
            onkeyup="(event.key === "Tab" )&& 
            this.previousElementSibling.focus()"
          />
        </form>
      </header>`
}

export default Header