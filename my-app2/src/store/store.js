import {
  createStore
} from 'redux'

// Reducer是一个纯函数
const counterReducer = (state = 1, action) => {
  switch (action.type) {
    case 'ADD':
      return state + 1;
    case 'MINUS':
      return state - 1;
    default:
      return state;
  }

}
const store = createStore(counterReducer)
export default store