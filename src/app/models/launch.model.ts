import { Pad } from "./pad.model"
import { Program } from "./program.model"
import { Rocket } from "./rocket.model"
import { StatusLaunch } from "./status-launch.model"

export class Launch {
        id!: string
        name!: string
        status!: StatusLaunch
        window_start!: string
        window_end!: string
        pad?: Pad
        program?: Program
        rocket?: Rocket
}