import React from 'react'

export const TabTwo = ({ setState }) => {
  return (
    <button className="blueTab" onClick={() => setState(false)}>Tab 2</button>
  )
}
