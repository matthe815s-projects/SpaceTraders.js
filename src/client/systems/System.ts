import Client from '../Client'
import Waypoint from '../types/Waypoint'
import axios from 'axios'
import { Trait } from './SystemManager'

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

  async find (trait: Trait): Promise<System[]> {
    const response: System[] = (await axios.get(`https://api.spacetraders.io/v2/systems/${this.symbol}/waypoints?traits=${trait}`, { headers: { Authorization: `Bearer ${this.client.token}` } })).data.data
    console.log(response)
    return response
  }
}
