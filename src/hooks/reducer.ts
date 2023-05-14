export default function reducer(state: object, action: object) {
  switch(action.type) {
    case "increment":
    return {...state, counter: state.counter + 1};
    case "decrement":
    return {...state, counter: state.counter - 1};
    default:
    return state;
  }
}
