import html from "../store/core.js"

function Header() {
    return html`
      <header class="header">
        <input 
          type="checkbox" 
          id="toggle-all" 
          class="toggle-all" />
        <label for="toggle-all"></label>
        <input
          type="text"
          class="get-todo"
          placeholder="What needs to be done?"
          onkeyup="console.log(event.keyCode)"
        />
      </header>`
}

export default Header