import { Request, Response } from 'express'
import Client from '../../client/Client'

export default function Index (client: Client) {
  console.log("index")
  return (req: Request, res: Response) => res.send(`Hello World! Currently running with ${client.token}`)
}
