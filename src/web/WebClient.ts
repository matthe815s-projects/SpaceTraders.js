import path from 'path'
import Client from '../client/Client'
import Ship from '../client/ships/Ship'
const express = require('express')

export default class WebClient {
  private client: Client
  public app: any

  constructor (client: Client) {
    this.client = client
    this.app = express()
    this.app.use(express.static(path.resolve(__dirname, 'public')))
    this.app.use(express.static(path.resolve(__dirname, 'build')))
    this.app.set('view engine', 'ejs')
    this.app.set('views', path.join(__dirname, '/build'))
  }

  start () {
    this.app.listen(3000, () => console.log('Listening on port 3000'))
    this.registerEndpoints()
  }

  registerEndpoints () {
    this.app.get('/api/ships', (req: any, res: any) => {
      const ships: Ship[] = [];

      this.client.ships.cache.forEach((ship: any) => {
        let {client: _, ...shipData} = ship;
        ships.push(shipData);
      })

      res.json(ships)
    });
  }
}
