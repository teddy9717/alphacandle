
import Navbar from '../components/Navbar'

export default function About() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <div className="pt-40 px-8">
        <h2 className="text-4xl font-bold mb-4">About AlphaCandle</h2>
        <p className="text-lg text-gray-300">We are a premium crypto signal platform helping traders around the world identify breakout opportunities using AI and expert-level chart analysis.</p>
      </div>
    </div>
  )
}
