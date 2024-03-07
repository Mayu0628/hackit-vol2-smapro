import Link from "next/link";

export default function Home() {
  return (
    <main>
      top
      <Link href="/game-start">
        <button>スタート</button>
      </Link>
    </main>
  );
}
