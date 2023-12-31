import React from 'react'
import reactLogo from '../logo.svg'

export const ReactLogo = () => {
  return (
    <img
        src={reactLogo}
        className="App-logo"
        alt="React logo"
        style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            width: '130px',
          }}
    />
  )
}

export default ReactLogo
