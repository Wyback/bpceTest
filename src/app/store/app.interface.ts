import { Launch } from "../models/launch.model"

export interface LaunchListState {
    launchs: Launch[]
}

export const initialState: LaunchListState = {
    launchs: []
}