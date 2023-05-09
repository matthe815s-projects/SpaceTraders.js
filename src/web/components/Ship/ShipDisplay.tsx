import React from 'react'
import Ship from '../../../client/ships/Ship'

type ShipProps = {
    ship: Ship
}

export default function ShipDisplay ({ ship }: ShipProps) {
  return (
    <div>
      <h3>{ship.symbol}</h3>
      <p>{ship.fuel.current} / {ship.fuel.capacity}</p>
    </div>
  )
}
