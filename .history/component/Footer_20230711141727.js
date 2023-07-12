import html from "../store/core.js"

function Footer() {
    return html`
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
      </footer>`
}

export default Footer