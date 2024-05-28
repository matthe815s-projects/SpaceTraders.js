import axios from 'axios'
import {writeFileSync} from 'fs'
import AgentData from './types/AgentData'
import EventEmitter from 'events'
import ShipManager from './ships/ShipManager'
import SystemManager from './systems/SystemManager'
import Contract from './contracts/Contract'
import System from './systems/System'

export default class Client extends EventEmitter {
  public token: string = ''
  public ships: ShipManager = new ShipManager(this)
  public systems: SystemManager = new SystemManager(this)
  public agent: AgentData = {} as AgentData
  public contracts: Contract[] = []

  async Register (symbol: string, faction: string) {
    console.log(`Registering ${symbol} to ${faction}`)

    // send request to https://api.spacetraders.io/v2/register using axios with body: symbol and faction
    const response = await axios.post('https://api.spacetraders.io/v2/register', { symbol, faction }, { headers: { 'Content-Type': 'application/json' } })
    console.log(response.data)
    console.log(`Agent registered with token: ${response.data.token}`)
    writeFileSync('config.json', JSON.stringify({ token: response.data.token }))

    // TODO; Register space-agent
    this.token = response.data.token
  }

  async Login (token: string) {
    // Fetch agent details from token
    this.agent = (await axios.get('https://api.spacetraders.io/v2/my/agent', { headers: { Authorization: `Bearer ${token}` } })).data.data
    this.token = token

    await this.ships.fetch()
    this.agent.homeSystem = await this.GetHomeSystem()

    this.emit('ready')

    await this.GetContracts()
  }

  async GetHomeSystem (): Promise<System> {
    const system: string = `${this.agent.headquarters.split('-')[0]}-${this.agent.headquarters.split('-')[1]}`
    const systemData = (await axios.get(`https://api.spacetraders.io/v2/systems/${system}`, { headers: { Authorization: `Bearer ${this.token}` } })).data.data
    return new System(this, systemData)
  }

  async GetFactions () {
    const response = (await axios.get('https://api.spacetraders.io/v2/factions', { headers: { Authorization: `Bearer ${this.token}` } })).data
    console.log(response.data)
  }

  // TODO; Move to independent manager class
  async GetContracts () {
    const response = (await axios.get('https://api.spacetraders.io/v2/my/contracts', { headers: { Authorization: `Bearer ${this.token}` } })).data
    this.contracts = response.data as Contract[]
    this.emit('contractsLoad', this.contracts)
  }
}
