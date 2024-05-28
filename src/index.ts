'use strict'

import Client from './client/Client'
import { existsSync, readFileSync, writeFileSync } from 'fs'
import Contract from './client/contracts/Contract'

if (!existsSync('config.json')) {
  console.log('No config.json found, creating one')
  writeFileSync('config.json', JSON.stringify({ token: '' }))
}

const config = JSON.parse(readFileSync('config.json', 'utf-8'))

const client = new Client()

client.Login(config.token)

client.on('ready', (): void => {
  console.log('Client ready')

  console.log(`Current ship count: ${client.ships.cache.size}`)
  console.log(`Current system count: ${client.systems.cache.size}`)
})

client.on('contractsLoad', (contracts: Contract[]) => {
  console.log(`Current contract count: ${contracts.length}`)
})
