
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { LaunchListState } from './app.interface';
import { AppReducer, reducerLaunch } from './reducers/reducer-launchs';

export const reducers: ActionReducerMap<{ launchs: LaunchListState }> = {
    launchs: AppReducer
  };

  export const metaReducers: MetaReducer<{ launchs: LaunchListState }>[] = [];