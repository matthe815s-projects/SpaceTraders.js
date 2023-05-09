import Client from '../Client'
import Waypoint from '../types/Waypoint'

export default class System {
  private client: Client

  public symbol: string
  public sectorSymbol: string
  public type: string
  public x: number
  public y: number
  public waypoints: Waypoint[]
  public factions: object[]

  constructor (client: Client, data: System) {
    this.client = client

    this.symbol = data.symbol
    this.sectorSymbol = data.sectorSymbol
    this.type = data.type
    this.x = data.x
    this.y = data.y
    this.waypoints = data.waypoints
    this.factions = data.factions
  }
}
