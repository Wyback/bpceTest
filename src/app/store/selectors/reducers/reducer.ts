import { Action, createReducer, MetaReducer, on } from "@ngrx/store";
import { initialState, LaunchListState } from "../../app.interface";
import { loadLaunchListFailure, loadLaunchListSuccess } from "./actions";

export const userFeatureKey = 'AppState';

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

export function AppReducer(state: LaunchListState, action: Action): LaunchListState {
    return reducer(state as LaunchListState, action as Action);
  }