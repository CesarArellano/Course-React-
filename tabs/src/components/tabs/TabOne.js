import React from 'react'

export const TabOne = ({ setState }) => {
  return (
    <button className="greenTab" onClick={() => setState(true)}>Tab 1</button>
  )
}
