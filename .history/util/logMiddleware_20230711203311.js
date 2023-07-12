export default function Logger(reducer) {
    return (state, action, args) => {
        console.group(action)
        console.log('PreState: ', state) 
        console.log('Action: ', action)
        console.log('Argument: ', args)
        const newState = reducer(state, action, args)
        console.log('CurrentState: ', newState) 
        console.groupEnd()
        return newState
    }
}