import { Rocket } from "./rocket.model"
import { StatusLaunch } from "./status-launch.model"

export class Launch {
        id!: string
        name!: string
        status!: StatusLaunch
        window_start!: string
        window_end!: string
        pad?: any
        program?: any
        rocket?: Rocket
}