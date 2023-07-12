import html from "../store/core.js"

export default function App() {
    return html`
    <div class="container">
    <h1 class="title">todos</h1>
    <div class="todo-app">
      <header class="header">
        <input type="checkbox" id="toggle-all" class="toggle-all" />
        <label for="toggle-all"></label>
        <input
          type="text"
          class="get-todo"
          placeholder="What needs to be done?"
        />
      </header>
      <section class="main">
        <ul class="todo-list">
          <li class="todo-item completed">
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
        </ul>
      </section>
      <footer class="footer">
        <div class="wrap-footer">
          <div class="count-incomplete"><span>10</span> item left</div>
          <div class="wrap-filters">
            <ul class="filters">
              <li>
                <a class="filter-item selected">All</a>
              </li>
              <li>
                <a class="filter-item">Active</a>
              </li>
              <li>
                <a class="filter-item">Completed</a>
              </li>
            </ul>
          </div>
          <button class="clear-completed">Clear completed</button>
        </div>
      </footer>
    </div>
  </div> `
}