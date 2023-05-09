'use strict'

import Client from './client/Client'
import { existsSync, readFileSync, writeFileSync } from 'fs'
import { ShipFlightMode } from './client/ships/ShipFlightMode'

if (!existsSync('config.json')) {
  console.log('No config.json found, creating one')
  writeFileSync('config.json', JSON.stringify({ token: '' }))
}

const config = JSON.parse(readFileSync('config.json', 'utf-8'))

const client = new Client()
client.Login(config.token)

client.on('ready', async () => {
  console.log('Client ready')

  console.log(`Current ship count: ${client.ships.cache.size}`)

  await client.ships.cache.get('STARIE-1')?.SetFlightMode(ShipFlightMode.STEALTH)
  console.log(client.ships.cache.get('STARIE-1'))

  console.log(`Current system count: ${client.systems.cache.size}`)
})
