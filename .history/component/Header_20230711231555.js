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
            onkeyup="(function func(event) { console.log(event)})()"
          />
          <input
            type="text"
            class="get-todo-description"
            placeholder="Some description?"
            tabindex="1"
            id="get-todo-description"         

          />
        </form>
      </header>`
}

export default Header