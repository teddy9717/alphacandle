
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <section className="text-center py-40 px-6">
        <h1 className="text-5xl font-extrabold tracking-tight mb-4">AlphaCandle</h1>
        <p className="text-xl mb-6 text-gray-300">Precision Crypto Signals. Global Momentum.</p>
        <a href="/plans" className="bg-white text-black font-semibold py-3 px-6 rounded-full hover:bg-gray-300 transition">Get Started</a>
      </section>
    </div>
  )
}
