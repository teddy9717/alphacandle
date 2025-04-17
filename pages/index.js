
import Navbar from '../components/Navbar';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Navbar />
      <header className="relative h-screen flex items-center justify-center text-white bg-black">
        <Image src="/hero.jpg" alt="AlphaCandle Hero" layout="fill" objectFit="cover" className="opacity-40" />
        <div className="absolute z-10 text-center px-6 fade-in">
          <h1 className="text-5xl font-bold mb-4">Professional Crypto Signals</h1>
          <p className="text-lg text-gray-200 mb-6 max-w-2xl mx-auto">
            Gain the edge in the crypto market with AlphaCandle. Precision signals powered by deep analytics and real-time market intelligence.
          </p>
          <a href="https://t.me/alphacandle" className="bg-yellow-400 text-black py-3 px-6 rounded-full font-semibold hover:bg-yellow-300 transition">Join Telegram Group</a>
        </div>
      </header>
      <main className="bg-black text-white py-20 px-6">
        <section id="about" className="max-w-5xl mx-auto text-center mb-24 fade-in">
          <h2 className="text-3xl font-bold mb-4">Why Choose AlphaCandle?</h2>
          <p className="text-gray-300">
            We provide handpicked signals from experienced analysts who study momentum, reversal points, whale activity, and market structure across multiple timeframes.
          </p>
        </section>
        <section id="plans" className="max-w-5xl mx-auto text-center mb-24 fade-in">
          <h2 className="text-3xl font-bold mb-6">Choose Your Plan</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-800 p-6 rounded-xl">
              <h3 className="text-xl font-bold">1 Month</h3>
              <p className="text-yellow-400 text-lg">$99</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl">
              <h3 className="text-xl font-bold">3 Months</h3>
              <p className="text-yellow-400 text-lg">$249</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl">
              <h3 className="text-xl font-bold">12 Months</h3>
              <p className="text-yellow-400 text-lg">$599</p>
            </div>
          </div>
        </section>
        <section id="results" className="text-center fade-in">
          <h2 className="text-3xl font-bold mb-4">Signal Accuracy</h2>
          <p className="text-green-400 text-2xl font-bold">+92% average hit rate</p>
          <p className="text-gray-300">Based on thousands of signals sent since 2023</p>
        </section>
      </main>
    </>
  );
}
