export default function html([first, ...strings],...values) {
    return `${values.reduce((acc, cur) =>  acc.concat(cur, strings.shift()) ,[first])
        .filter((item) => item && item !== true || item === 0)
        .join("")}`
}

export function createStore(reducer) {
    const state = reducer()
    const roots = new Map()

    function render(roots) {
        for(const [root, component] of roots) {
            root.innerHTML = component()
        }
    }
    return {
        attach(component, root) {
            roots.set(root, component)
            render()
        },
        dispatch(action, ...args) {
            state = reducer(state, action, args)
            render()
        },
        connect(selector = state => state) {
            return (component) => (state, ...args) => component(Object.assign({}, state, args))
        }
    }
}