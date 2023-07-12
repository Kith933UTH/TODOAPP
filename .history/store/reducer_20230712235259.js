import storage from "../util/storage.js"
import uuid from "../util/UUID.js"

const init = {
    todos: storage.get(),
    filter: 'all',
    filters : {
        all: () => true,
        active: (todo) => !todo.completed,
        completed: (todo) => todo.completed
    },
    editingIndex: null,
}

const actions = {
    add({todos}, ...args) {
        const [title, description] = args
        if(title) 
            todos.push({ title, description, completed: false, id: uuid()})
        storage.set(todos)
    },
    destroy({todos}, id) {
        todos.forEach((todo, index) => todo.id === id && todos.splice(index, 1))
        storage.set(todos)
    },
    toggleAll({todos}, completed) {
        todos.forEach((todo) => todo.completed = completed)
        storage.set(todos)
    },
    toggleCompleted({todos}, id) {
        todos.forEach((todo) => todo.id === id && (todo.completed = !todo.completed))
        storage.set(todos)
    },
    enableEditing(state, index, id) {
        console.log(index, id)
        // state.editingIndex = index

    },
    editing(state, ...args) { 
        const [index, title, description] = args
        if(title && state.todos[index]) {
            state.todos[index].title = title
            state.todos[index].description = description
        }
        state.editingIndex = null
        storage.set(state.todos)
    },
    disableEditing(state) {
        state.editingIndex = null
    },
    changeFilter(state, newFilter) {
        state.filter = newFilter
    },
    clearCompleted(state) {
        state.todos = state.todos.filter(state.filters.active)
        storage.set(state.todos)
    }
}
export default function reducer(state = init, action, args) {
    actions[action] && actions[action](state, ...args)
    return state
}