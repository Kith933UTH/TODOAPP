const STORAGE_TODOS_KEY = "TODOS"
export default {
    get() {
        return JSON.parse(localStorage.getItem(STORAGE_TODOS_KEY) || {})
    },
    set(todos) {
        localStorage.setItem(STORAGE_TODOS_KEY, JSON.stringify(todos))
    }
}