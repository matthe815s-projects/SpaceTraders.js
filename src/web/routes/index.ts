import { Request, Response } from 'express'

export default function Index (req: Request, res: Response) {
  res.send('Hello World!')
}
