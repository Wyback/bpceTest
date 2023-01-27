
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { LaunchListState } from './app.interface';
import { AppReducer, reducerLaunch } from './reducers/reducer-launchs';

export const reducers: ActionReducerMap<LaunchListState> = {
    launchs: AppReducer
  };

  export const metaReducers: MetaReducer<LaunchListState>[] = [];