import path from 'path'
import Client from '../client/Client'
import Index from './pages/index'
import Ships from './pages/ships'
const express = require('express')

export default class WebClient {
  private client: Client
  public app: any

  constructor (client: Client) {
    this.client = client
    this.app = express()
    this.app.use(express.static(path.resolve(__dirname, 'public')))
    this.app.set('view engine', 'ejs')
    this.app.set('views', path.join(__dirname, '/pages'))
  }

  start () {
    this.app.listen(3000, () => console.log('Listening on port 3000'))
    this.registerEndpoints()
  }

  registerEndpoints () {
    this.app.get('/', Index(this.client))
    this.app.get('/ships', Ships(this.client))
  }
}
