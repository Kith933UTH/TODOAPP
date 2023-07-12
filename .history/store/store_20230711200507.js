import { createStore } from "./core.js";
import reducer from "./reducer.js";
import Logger from "../util/logMiddleware.js";
const {attach, dispatch, connect} = createStore(Logger(reducer))

window.dispatch = dispatch

export {
    attach,
    connect
}