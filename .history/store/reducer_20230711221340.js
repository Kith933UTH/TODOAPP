import storage from "../util/storage.js"

const init = {
    filter: 'all',
    filters : {
        all: () => true,
        active: (todo) => !todo.completed,
        completed: (todo) => todo.completed
    },
    todos: [
        {
            title: "Học Javascript.",
            description: "Bắt đầu từ tháng 6 đến nay.",
            completed: false
        },
        {
            title: "Học ReactJS.",
            description: "Dự định sẽ học trong tháng 10/2023.",
            completed: false
        },
        {
            title: "Học NodeJS.",
            description: "Sau khi học xong ReactJS.",
            completed: false
        }
    ]
}


const actions = {
    add({todos}, ...args) {
        if(args) {
            todos.push({
                title: args,

            })
        }
    },
    switchInput(state, args) {
        const [curId, nextId] = args
        const cur = document.getElementById(cur)
        const next = document.getElementById(next)
        let tabIndexTemp = cur.tabIndex
        cur.tabIndex = next.tabIndex
        next.tabIndex = tabIndexTemp 
    }
}
export default function reducer(state = init, action, args) {
    actions[action] && actions[action](state, args)
    return state
}