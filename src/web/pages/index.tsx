import { Request, Response } from 'express'
import Client from '../../client/Client'
import React from 'react'
import ReactDOMServer from 'react-dom/server'

function App ({ client }: any) {
  return (
    <div>
      <h1>SpaceTraders</h1>
      <p>{client.token}</p>
    </div>
  )
}

export default function Index (client: Client) {
  return (req: Request, res: Response) => res.send(ReactDOMServer.renderToString(<App client={client} />))
}
