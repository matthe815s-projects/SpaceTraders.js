import React from 'react'
import Ship from '../../../client/ships/Ship'

export default function ShipDisplay () {
  const ships = fetch('/api/ships').then(res => res.json()).then(console.log);

  return (
    <div>
    </div>
  )
}

type ShipProps = {
  ship: Ship
}

ShipDisplay.Ship = function Ship({ ship }: ShipProps) {
    return (
      <div>
        <h3>{ship.symbol}</h3>
        <p>{ship.fuel.current} / {ship.fuel.capacity}</p>
      </div>
    )
}
