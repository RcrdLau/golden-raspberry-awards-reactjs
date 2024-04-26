import { configureStore } from '@reduxjs/toolkit'

import { counterSlice } from './counter/slice'
import { sideMenuSlice } from './sideMenu/slice'
import { tableSlice } from './tables/slice'

export const store = configureStore({
    reducer: {
        sideMenu: sideMenuSlice.reducer,
        counter: counterSlice.reducer,
        table: tableSlice.reducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch