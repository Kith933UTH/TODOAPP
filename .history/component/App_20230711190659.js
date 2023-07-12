import html from "../store/core.js"
import { connect } from "../store/store.js"
import Header from "./Header.js"
import TodoList from "./TodoList.js"
import Footer from "./Footer.js"

function App(props) {
    console.log(props)
    return html`
    <div class="container">
    <h1 class="title">TunKith UTH</h1>

  </div> `
}

export default connect(state => ({todos: state.todos,filter: state.filter}))(App)