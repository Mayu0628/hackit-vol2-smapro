'use client'

import { createContext, useContext, useState } from 'react'

const GameDataContext = createContext([])

export const useGameData = () => useContext(GameDataContext)

const GameDataProvider = ({ children }) => {
  const [gamedata, setGameData] = useState({ id: 0, techName: 'a' })

  console.log('gamedata:', gamedata)

  return (
    <GameDataContext.Provider value={{ gamedata, setGameData }}>
      {children}
    </GameDataContext.Provider>
  )
}

export default GameDataProvider
