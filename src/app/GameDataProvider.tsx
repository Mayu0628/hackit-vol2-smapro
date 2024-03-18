'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react'

// contextの型を定義
interface GameData {
  gamedata: {
    id: number
    difficulty: string
    sourceCode: string
    techName: string
    techDesc: string
    codeDesc: string
    result: string
    docLink: string
  }[]
  setGameData: React.Dispatch<
    React.SetStateAction<
      {
        id: number
        difficulty: string
        sourceCode: string
        techName: string
        techDesc: string
        codeDesc: string
        result: string
        docLink: string
      }[]
    >
  >
}

// createContextの型を正確に指定
const GameDataContext = createContext<GameData>({
  gamedata: [], // 空の配列を初期値として設定
  setGameData: () => {}, // 型を満たすための空関数
})

export const useGameData = () => useContext(GameDataContext)

// childrenの型を定義
interface GameDataProviderProps {
  children: ReactNode
}

const GameDataProvider: React.FC<GameDataProviderProps> = ({ children }) => {
  const [gamedata, setGameData] = useState<GameData['gamedata']>([])

  console.log('gamedata:', gamedata)

  return (
    <GameDataContext.Provider value={{ gamedata, setGameData }}>
      {children}
    </GameDataContext.Provider>
  )
}

export default GameDataProvider
