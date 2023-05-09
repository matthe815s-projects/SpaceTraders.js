import Client from '../Client'
import axios from 'axios'
import { ShipStatus } from './ShipStatus'
import { ShipFlightMode } from './ShipFlightMode'

export default class Ship {
  private client: Client

  // TODO; Variable cleanup and typing

  symbol: string
  nav: {
    systemSymbol: string;
    waypointSymbol: string;
    route: object;
    status: ShipStatus;
    flightMode: ShipFlightMode;
  }

  crew: object
  fuel: {
        current: number;
        capacity: number;
        consumed: object;
  }

  frame: object
  reactor: object
  engine: object
  modules: object[]
  mounts: object[]
  registration: {
        name: string;
        factionSymbol: string;
        role: string;
  }

  cargo: {
        capacity: number;
        units: number;
        inventory: object[];
  }

  constructor (client: Client, data: Ship) {
    this.client = client

    // TODO; Clean this mess up
    this.symbol = data.symbol
    this.nav = data.nav
    this.nav.status = ShipStatus[data.nav.status as keyof typeof ShipStatus]
    this.nav.flightMode = ShipFlightMode[data.nav.flightMode as keyof typeof ShipFlightMode]
    this.crew = data.crew
    this.fuel = data.fuel
    this.frame = data.frame
    this.reactor = data.reactor
    this.engine = data.engine
    this.modules = data.modules
    this.mounts = data.mounts
    this.registration = data.registration
    this.cargo = data.cargo
  }

  /**
   * Sends the ship into orbit, fails if the ship is not docked
   */
  async Orbit () {
    if (this.nav.status !== ShipStatus.DOCKED) return

    await axios.post(`https://api.spacetraders.io/v2/my/ships/${this.symbol}/orbit`, {}, { headers: { Authorization: `Bearer ${this.client.token}` } })
    this.nav.status = ShipStatus.IN_ORBIT
  }

  /**
   * Docks the ship, fails if the ship is already docked
   */
  async Dock () {
    if (this.nav.status === ShipStatus.DOCKED) return

    await axios.post(`https://api.spacetraders.io/v2/my/ships/${this.symbol}/dock`, {}, { headers: { Authorization: `Bearer ${this.client.token}` } })
    this.nav.status = ShipStatus.DOCKED
  }

  /**
   * Set the flight mode of the ship
   * @param mode The flight mode to set the ship to
   */
  async SetFlightMode (mode: ShipFlightMode) {
    await axios.patch(`https://api.spacetraders.io/v2/my/ships/${this.symbol}/nav`, {
      flightMode: mode
    }, { headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${this.client.token}` } })

    this.nav.flightMode = mode
  }

  /**
   * Navigate to a waypoint within the system
   * @param waypoint The waypoint to navigate to
   */
  async Navigate (waypoint: string) {
    if (this.nav.status !== ShipStatus.IN_ORBIT) return

    await axios.post(`https://api.spacetraders.io/v2/my/ships/${this.symbol}/navigate`, {
      waypointSymbol: waypoint
    }, { headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${this.client.token}` } })
  }

  /**
   * Warp to a system if a warp drive is installed
   * @param system The system to warp to
   */
  async Warp (system: string) {
    if (this.nav.status !== ShipStatus.IN_ORBIT) return

    await axios.post(`https://api.spacetraders.io/v2/my/ships/${this.symbol}/warp`, {
      systemSymbol: system
    }, { headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${this.client.token}` } })
  }

  /**
   * Refuel ship from planet if fuel is available
   * @todo
   */
  async Refuel () {
    // TODO; Implement
  }

  /**
   * Extract resources from the planet/asteroid
   * @todo
   */
  async Extract () {
    // TODO; Implement
  }
}
