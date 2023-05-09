import { Request, Response } from 'express'
import Client from '../../client/Client'
import path from 'path'

export default function Ships (client: Client) {
  return (req: Request, res: Response) => res.render(path.resolve(__dirname, 'ships'), {
    ships: Array.from(client.ships.cache.values()).map(ship => ({ symbol: ship.symbol, fuel: ship.fuel }))
  })
}
