import { Request, Response } from 'express'
import Client from '../../client/Client'
import React from 'react';
import ReactDOMServer from 'react-dom/server';

export default function Index (client: Client) {
  console.log("index")
  return (req: Request, res: Response) => res.send(ReactDomServer.renderToString(<App />)
}
