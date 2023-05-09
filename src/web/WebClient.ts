import Client from '../client/Client'
import Index from './routes'
const express = require('express')

export default class WebClient {
  private client: Client
  public express: any

  constructor (client: Client) {
    this.client = client
    this.express = express()
  }

  start () {
    this.express.listen(3000, () => console.log('Listening on port 3000'))
    this.registerEndpoints()
  }

  registerEndpoints () {
    this.express.get('/', Index(this.client))
  }
}
