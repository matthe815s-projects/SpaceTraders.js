import React from 'react'

type AppProps = {
    children: React.ReactNode
}

export default function App ({ children }: AppProps) {
  return (
    <>
      <head>
        <title>SpaceTraders</title>
      </head>
      <body>
        {children}
      </body>
    </>
  )
}
