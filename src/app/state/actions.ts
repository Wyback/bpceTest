import { createAction, props } from "@ngrx/store";
import { Launch } from "../models/launch.model";

export const loadLaunchList = createAction('[Launch List Component] Load Launch List')

export const loadLaunchListSuccess = createAction('[Launch List Component] Load Launch List Success', props<{ launchs: Launch[] }>())

export const loadLaunchListFailure = createAction('[Launch List Component] Load Launch Failure', props<{ launchs: Launch[] }>())