import Client from '../Client'
import axios from 'axios'
import System from './System'

export default class SystemManager {
  private client: Client

  public cache = new Map<string, System>()

  constructor (client: Client) {
    this.client = client
  }

  async fetch () {
    const response: System[] = (await axios.get('https://api.spacetraders.io/v2/systems', { headers: { Authorization: `Bearer ${this.client.token}` } })).data.data

    response.forEach(system => {
      this.cache.set(system.symbol, new System(this.client, system))
    })
  }
}
