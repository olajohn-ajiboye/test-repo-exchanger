import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE',
}

const filtersSlice = createSlice({
    name: 'visibilityFilters',
    initialState: VisibilityFilters.SHOW_ALL,
    reducers: {
        setVisibilityFilter(state, action) {
            return action.payload
        },
    },
})

export const store = configureStore({
    reducer: {
        filter: filtersSlice.reducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>
