import { ContractType } from './ContractType'
import Client from '../Client'
import axios from 'axios'

export default class Contract {
  private client: Client

  public id: string
  public factionSymbol: string
  public type: ContractType
  public terms: {
    deadline: Date,
    payment: {
      onAccepted: number,
      onFulfilled: number
    },
    deliver: {
      tradeSymbol: string,
      destinationSymbol: string,
      unitsRequired: number,
      unitsFulfilled: number
    }[]
  }

  public accepted: boolean
  public fulfilled: boolean
  public expiration: Date
  public deadlineToAccept: Date

  constructor (client: Client, contract: Contract) {
    this.client = client

    this.id = contract.id
    this.factionSymbol = contract.factionSymbol
    this.type = contract.type
    this.terms = contract.terms

    this.accepted = contract.accepted
    this.fulfilled = contract.fulfilled
    this.expiration = new Date(contract.expiration)
    this.deadlineToAccept = new Date(contract.deadlineToAccept)
  }

  async accept (): Promise<void> {
    await axios.post(`https://api.spacetraders.io/v2/my/contracts/${this.id}/accept`, {}, { headers: { Authorization: `Bearer ${this.client.token}` } })
    this.accepted = true
  }
}
