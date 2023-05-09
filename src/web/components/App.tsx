import React, { useState } from 'react'
import ShipDisplay from './Ship/Ships'

export default function App () {
  return (
    <>
      <head>
        <title>SpaceTraders</title>
      </head>
      <body>
        {
          <ShipDisplay />
        }
      </body>
    </>
  )
}
