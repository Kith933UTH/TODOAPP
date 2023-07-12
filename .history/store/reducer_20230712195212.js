import storage from "../util/storage.js"

const init = {
    todos: storage.get(),
    filter: 'all',
    filters : {
        all: () => true,
        active: (todo) => !todo.completed,
        completed: (todo) => todo.completed
    },
    editingIndex: null
}

const actions = {
    add({todos}, ...args) {
        const [title, description] = args
        if(title) 
            todos.push({ title, description, completed: false})
        storage.set(todos)
    },
    destroy({todos}, index) {
        todos[index] && todos.splice(index, 1)
        storage.set(todos)
    },
    toggleAll({todos}, completed) {
        todos.forEach((todo) => todo.completed = completed)
        storage.set(todos)
    },
    toggleCompleted({todos}, index) {
        todos[index] && (todos[index].completed = !todos[index].completed)
        storage.set(todos)
    },
    enableEditing(state, index) {
        state.editingIndex = index
    },
    editing(state, ...args) { 
        const [index, title, description] = args
        if(title && state.todos[index]) {
            state.todos[index].title = title
            state.todos[index].description = description
            state.editingIndex = null
        }
        return
    }
}
export default function reducer(state = init, action, args) {
    actions[action] && actions[action](state, ...args)
    return state
}