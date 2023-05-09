import { Request, Response } from 'express'
import Client from '../../client/Client'

export default function Index (client: Client) {
  return (req: Request, res: Response) => res.render('index', { ships: [] })
}
