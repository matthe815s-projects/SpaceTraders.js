import Client from '../Client'
import Waypoint from '../types/Waypoint'
import axios from 'axios'
import { Trait } from './SystemManager'
import Ship from '../ships/Ship'

type StoreShipData = {
  shipSymbol: string
  shipType: string
  waypointSymbol: string
  agentSymbol: string
  price: number
  timestamp: Date
}

export class StoreShip {
  private client: Client

  public shipSymbol: string = ''
  public shipType: string = ''
  public waypointSymbol: string = ''
  public agentSymbol: string = ''
  public price: number = 0
  public timestamp: Date = new Date()

  constructor (client: Client, data: StoreShipData) {
    this.client = client

    this.shipSymbol = data.shipSymbol
    this.shipType = data.shipType
    this.waypointSymbol = data.waypointSymbol
    this.agentSymbol = data.agentSymbol
    this.price = data.price
    this.timestamp = data.timestamp
  }

  public async purchase (): Promise<Ship> {
    const response = await axios.post('https://api.spacetraders.io/v2/my/ships', { shipType: this.shipType, waypointSymbol: this.waypointSymbol }, { headers: { Authorization: `Bearer ${this.agentSymbol}` } })
    this.client.ships.cache.set(response.data.data.ship.symbol, new Ship(this.client, response.data.data))
    return new Ship(this.client, response.data.data)
  }
}

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

  async getShipShop (waypoint: string): Promise<StoreShip[]> {
    const response: StoreShipData[] = (await axios.get(`https://api.spacetraders.io/v2/systems/${this.symbol}/waypoints/${waypoint}/shipyard`, { headers: { Authorization: `Bearer ${this.client.token}` } })).data.data.transactions
    const ships: StoreShip[] = []

    for (const ship of response) {
      ships.push(new StoreShip(this.client, ship))
    }

    return ships
  }
}
