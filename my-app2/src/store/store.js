import {
  createStore,
  combineReducers
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
// 使用的时候需要state.count
// const counterReducer = (state = { count: 1 }, action) => {
//   const count = state.count
//   console.log(action)
//   switch (action.type) {
//     case 'ADD':
//       return {count: count + 1};
//     case 'MINUS':
//       return {count: count - 1};
//     default:
//       return state;
//   }

// }
const store = createStore(counterReducer)
// 多个reducers,使用的时候需要store.counter.count
// const store = createStore(combineReducers({counter: counterReducer}))
export default store