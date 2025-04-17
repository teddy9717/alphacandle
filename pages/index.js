
import Navbar from '../components/Navbar';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Navbar />
      <header className="relative h-screen text-white flex items-center bg-black">
        <Image src="/hero.jpg" alt="AlphaCandle Signal Background" layout="fill" objectFit="cover" className="opacity-40" />
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6 fade-up">
          <h1 className="text-5xl font-bold mb-6">Precision Crypto Signals. Elevated Results.</h1>
          <p className="text-lg text-gray-300 mb-8">
            Join AlphaCandle and unlock institutional-grade trading signals. Our advanced analytics, volume patterns, and momentum-based strategies give you a consistent edge in crypto markets.
          </p>
          <a href="https://t.me/alphacandle" className="bg-yellow-400 text-black font-semibold py-3 px-6 rounded-full hover:bg-yellow-300 transition">
            Join Telegram Group
          </a>
        </div>
      </header>
    </>
  );
}
