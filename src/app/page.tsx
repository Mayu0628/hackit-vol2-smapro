'use client'
import GameRules from "./game-rules/page";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>top</h1>
      <div>
        <Link href='/course-selection'>
          <button>コース選択</button>
        </Link>
        <GameRules buttonLabel="遊び方"/>
      </div>
    </>
  )
}
