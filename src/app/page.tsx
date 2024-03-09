'use client'
import { useRouter } from "next/navigation"

import GameRules from "./game-rules/page";

export default function Home() {

  const router = useRouter();

  return (
    <>
      <h1>top</h1>
      <div>
        <button onClick={() => router.push('/course-selection')}>
          コース選択
        </button>      
        <GameRules buttonLabel="遊び方"/>
      </div>
    </>
  )
}
