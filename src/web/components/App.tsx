import React from 'react'

type AppProps = {
    children: React.ReactNode
}

export default function App ({ children }: AppProps) {
  return (
    <html>
      <head>
        <title>SpaceTraders</title>
        <script src="/js/client.js"></script>
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
