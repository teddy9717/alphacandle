
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-32 px-6 text-white bg-black min-h-screen text-center">
        <h1 className="text-5xl font-bold mb-6">Welcome to AlphaCandle</h1>
        <p className="text-lg text-gray-300 mb-8">Precision crypto signals. Bitcoin-focused analysis. Trusted globally.</p>
        <a href="/plans" className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-300">View Plans</a>
      </main>
    </>
  );
}
