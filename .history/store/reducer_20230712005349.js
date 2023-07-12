import storage from "../util/storage.js"

const init = {
    filter: 'all',
    filters : {
        all: () => true,
        active: (todo) => !todo.completed,
        completed: (todo) => todo.completed
    },
    todos: storage.get()
}

const actions = {
    add({todos}, ...args) {
        const [title, description] = args
        if(args) 
            todos.push({ title, description, completed: false})
        storage.set(todos)
    },
    destroy({todos}, index) {
        todos[index] && todos.splice(index, 1)
        storage.set(todos)
    },
    toggleAll({todos}) {
        todos.forEach((todo) => todo.completed = true)
    }

}
export default function reducer(state = init, action, args) {
    actions[action] && actions[action](state, ...args)
    return state
}