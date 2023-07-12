import { createStore } from "./core.js";
import reducer from "./reducer.js";

const {attach, dispatch, connect} = createStore(reducer)

window.dispatch = dispatch

export {
    attach,
    connect
}