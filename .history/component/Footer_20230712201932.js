import html from "../store/core.js"
import { connect } from "../store/store.js"
function Footer({todos, filters, filter}) {
    return html`
      <footer class="footer">
        <div class="wrap-footer">
          <div class="count-incomplete"><span>${todos.filter(filters.active).length}</span> item left</div>
          <div class="wrap-filters">
            <ul class="filters">
              ${Object.keys(filters).map((key) => html`              
                <li>
                  <a class="filter-item selected">${key[0].toUpperCase() + key.slice(1)}</a>
                </li>`)}
            </ul>
          </div>
          <button class="clear-completed">Clear completed</button>
        </div>
      </footer>`
}

export default connect()(Footer)