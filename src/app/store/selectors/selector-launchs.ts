import { createSelector } from "@ngrx/store";
import { Launch } from "src/app/models/launch.model";
import { LaunchListState } from "../app.interface";

export const launchSelector = createSelector(
    (state: LaunchListState) => state.launchs,
    (launchs: Array<Launch>) => launchs
)