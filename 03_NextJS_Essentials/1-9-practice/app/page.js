import Link from 'next/link';
import Header from '@/components/header';
//  '@' refers to the root folder

export default function Home() {
  return (
    <main>
      <Header />
      <h1>Welcome to this NextJS Course!</h1>
      <p>🔥 Let&apos;s get started! 🔥</p>
      <p><Link href="/blog">Blog Page</Link></p>
      <p><Link href="/about">About Page</Link></p>
    </main>
  );
}

// <a href="/about">About Page</a>
// We don't wanna reload the page every time we use an anchor-tag