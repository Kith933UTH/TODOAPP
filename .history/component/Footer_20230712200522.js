import html from "../store/core.js"
import { connect } from "../store/store.js"
function Footer({todos, filters, filter}) {
  console.log(todos, filter, filters)
    return html`
      <footer class="footer">
        <div class="wrap-footer">
          <div class="count-incomplete"><span>${todos.filter(filters.active).lenght}</span> item left</div>
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
      </footer>`
}

export default connect()(Footer)