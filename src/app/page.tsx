'use client'
import { useRouter } from "next/navigation"

export default function Home() {

  const router = useRouter();

  return (
    <>
      <h1>top</h1>
      <div>
        <button onClick={() => router.push('/course-selection')}>
          コース選択
        </button>      
        <button>遊び方</button>
      </div>
    </>
  )
}
