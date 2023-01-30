import { Action, createReducer, MetaReducer, on } from "@ngrx/store";
import { loadLaunchListSuccess } from "../actions/actions-launchs";
import { initialState } from "../app.interface";

export const userFeatureKey = 'AppState';

export const reducerLaunch = createReducer(
    initialState,
    on(loadLaunchListSuccess, (state, action) => {
        return {
            launchs: action.launchs
        }
    })
)

export const metaReducers: MetaReducer[] = []

export const rootReducer = createReducer(initialState)

export function AppReducer(state = initialState, action: Action): typeof initialState {
    return reducerLaunch(state, action);
  }