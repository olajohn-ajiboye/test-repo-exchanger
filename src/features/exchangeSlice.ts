// import { createSlice } from '@reduxjs/toolkit'
// // addPocket,
// // removePocket,
// // topup,
// // withdraw,
// // exchange

// // const addPocket = (currency) => ({
// //     type: TYPES.ADD_POCKET,
// //     currency,
// //   });

// //   const removePocket = (currency) => ({
// //     type: TYPES.REMOVE_POCKET,
// //     currency,
// //   });

// //   const topup = (currency, amount) => ({
// //     type: TYPES.TOPUP_POCKET,
// //     currency,
// //     amount: parseFloat(amount),
// //   });

// //   const withdraw = (currency, amount) => ({
// //     type: TYPES.WITHDRAW_POCKET,
// //     currency,
// //     amount: parseFloat(amount),
// //   });

// //   const exchange = (source, target, amount, price) => ({
// //     type: TYPES.EXCHANGE,
// //     source,
// //     target,
// //     amount: parseFloat(amount),
// //     price: parseFloat(price),
// //   });

// let nextTodoId = 0

// const exchangeSlice = createSlice({
//   name: 'exchange',
//   initialState: [],
//   reducers: {
//     addPocket: {
//       reducer(state, action) {
//         const { id, text } = action.payload
//         state.push({ id, text, completed: false })
//       },
//       prepare(text) {
//         return { payload: { text, id: nextTodoId++ } }
//       }
//     },
//     toggleTodo(state, action) {
//       const todo = state.find(todo => todo.id === action.payload)
//       if (todo) {
//         todo.completed = !todo.completed
//       }
//     }
//   }
// })

// export const { addTodo, toggleTodo } = todosSlice.actions

// export default todosSlice.reducer
const name = ''
export default name
