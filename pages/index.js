
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-black text-white pt-32 pb-20 px-6 min-h-screen text-center">
        <section className="fade-in max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">No More Guessing. Just Precision Signals for Real Crypto Profits.</h1>
          <p className="text-lg text-gray-300 mb-8">
            Your trades deserve better than emotions and guesswork. AlphaCandle provides institutional-grade crypto signals backed by deep analysis and proven results.
          </p>
          <a href="/plans" className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 transition-all duration-300">View Signal Results</a>
        </section>

        <section className="fade-in mt-20 max-w-4xl mx-auto text-left">
          <h2 className="text-3xl font-semibold mb-4">Why AlphaCandle?</h2>
          <p className="text-gray-400 mb-4">
            At AlphaCandle, we believe that successful trading doesn’t come from luck — it comes from data, timing, and discipline. Our team of seasoned analysts and traders monitors the crypto market 24/7, delivering real-time, high-accuracy signals backed by deep technical research.
          </p>
          <p className="text-gray-400 mb-4">
            Stop wasting time staring at charts. Let us handle the research while you focus on executing smart, profitable trades.
          </p>
          <p className="text-gray-400 mb-4 italic">
            “Trading without data is gambling. Trading with AlphaCandle is strategy.”
          </p>
        </section>
      </main>
    </>
  );
}
