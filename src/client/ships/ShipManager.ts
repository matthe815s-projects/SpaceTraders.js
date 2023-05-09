import Client from '../Client'
import axios from 'axios'
import Ship from './Ship'

export default class ShipManager {
  private client: Client

  public cache = new Map<string, Ship>()

  constructor (client: Client) {
    this.client = client
  }

  async fetch () {
    const response: Ship[] = (await axios.get('https://api.spacetraders.io/v2/my/ships', { headers: { Authorization: `Bearer ${this.client.token}` } })).data.data

    response.forEach(ship => {
      this.cache.set(ship.symbol, new Ship(this.client, ship))
    })
  }
}
