import path from 'path'
import Client from '../client/Client'
import Index from './pages/index'
const express = require('express')

export default class WebClient {
  private client: Client
  public app: any

  constructor (client: Client) {
    this.client = client
    this.app = express()
    this.app.use(express.static(path.resolve(__dirname, 'public')))
  }

  start () {
    this.app.listen(3000, () => console.log('Listening on port 3000'))

    this.registerEndpoints()
  }

  registerEndpoints () {
    this.app.get('/', Index(this.client))
  }
}
