import Client from '../Client'
import axios from 'axios'
import System from './System'

export enum Trait {
  SHIPYARD = 'SHIPYARD',
}

export default class SystemManager {
  private client: Client

  public home: System | null
  public cache = new Map<string, System>()

  constructor (client: Client) {
    this.client = client
    this.home = null
  }

  first () {
    return Array.from(this.cache.values())[0]
  }

  async fetch () {
    let response: System[] = (await axios.get('https://api.spacetraders.io/v2/systems', { headers: { Authorization: `Bearer ${this.client.token}` } })).data.data
    console.log(response.length)

    response.forEach(system => {
      this.cache.set(system.symbol, new System(this.client, system))
    })

    for (const system of Array.from(this.cache.values())) {
      if (system.symbol === this.client.agent.headquarters) this.home = system
    }
  }
}
