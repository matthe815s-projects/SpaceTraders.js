import Client from '../client/Client';

export default class WebClient {
  private client: Client

  constructor (client: Client) {
    this.client = client
  }
}
