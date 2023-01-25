import { createReducer, MetaReducer, on } from "@ngrx/store";
import { loadLaunchListFailure, loadLaunchListSuccess } from "./actions";

export interface LaunchListState {
    launchs: any
}

export const initialState: LaunchListState = {
    launchs: undefined
}

export const reducer = createReducer(
    initialState,
    on(loadLaunchListSuccess, (state, action) => {
        return {
            launchs: action.launchs
        }
    })
)

export const metaReducers: MetaReducer[] = []

export const rootReducer = createReducer(initialState)