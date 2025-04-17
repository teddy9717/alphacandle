
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-32 bg-black text-white min-h-screen">
        <section className="text-center px-6 max-w-4xl mx-auto fade-up">
          <h1 className="text-5xl font-bold mb-6">No More Guessing. Just Precision Signals.</h1>
          <p className="text-lg text-gray-300 mb-6">
            AlphaCandle delivers institutional-grade crypto signals backed by technical analysis, market sentiment, and timing precision.
          </p>
          <a href="#plans" className="bg-yellow-400 text-black py-3 px-6 rounded-full font-semibold hover:bg-yellow-300 transition">View Plans</a>
        </section>

        <section id="features" className="mt-24 px-6 max-w-5xl mx-auto fade-up">
          <h2 className="text-3xl font-semibold mb-6 text-center">What Makes Us Different</h2>
          <ul className="grid md:grid-cols-2 gap-8 text-gray-300">
            <li>✅ 85%+ Accuracy across Spot & Futures</li>
            <li>📊 Daily Technical Breakdown & Briefings</li>
            <li>🔒 Private Telegram Community</li>
            <li>🧠 Emotion-Free, Rule-Based Strategies</li>
            <li>🌍 Trusted by Traders in 30+ Countries</li>
          </ul>
        </section>

        <section id="plans" className="mt-24 px-6 max-w-5xl mx-auto fade-up">
          <h2 className="text-3xl font-semibold mb-6 text-center">Our Plans</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-800 p-6 rounded-xl text-center">
              <h3 className="text-xl font-bold mb-2">1 Month</h3>
              <p className="text-yellow-400 text-lg font-semibold mb-4">$99</p>
              <p>Perfect for short-term traders</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl text-center">
              <h3 className="text-xl font-bold mb-2">3 Months</h3>
              <p className="text-yellow-400 text-lg font-semibold mb-4">$249</p>
              <p>Best value for consistent gains</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl text-center">
              <h3 className="text-xl font-bold mb-2">12 Months</h3>
              <p className="text-yellow-400 text-lg font-semibold mb-4">$599</p>
              <p>Long-term strategy access</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
