
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { LaunchListState } from './app.interface';
import { AppReducer, reducer } from './selectors/reducers/reducer';

export const reducers: ActionReducerMap<LaunchListState> = {
    launchs: reducer
  };
  export const metaReducers: MetaReducer<LaunchListState>[] = [];