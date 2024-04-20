import { configureStore } from '@reduxjs/toolkit'

import { counterSlice } from './counter/slice'
import { sideMenuSlice } from './sideMenu/slice'

// Automatically adds the thunk middleware and the Redux DevTools extension
export const store = configureStore({
    // Automatically calls `combineReducers`
    reducer: {
        sideMenu: sideMenuSlice.reducer,
        counter: counterSlice.reducer,
    }
})


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch