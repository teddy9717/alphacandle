
import Navbar from '../components/Navbar'

export default function Plans() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <div className="pt-40 px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">Subscription Plans</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { label: "1 Month", price: "$99" },
            { label: "3 Months", price: "$249" },
            { label: "12 Months", price: "$599" }
          ].map(plan => (
            <div key={plan.label} className="bg-gray-800 p-6 rounded-xl shadow-md">
              <h3 className="text-2xl font-semibold mb-2">{plan.label}</h3>
              <p className="text-xl mb-4">{plan.price}</p>
              <button className="bg-white text-black py-2 px-4 rounded-full font-semibold hover:bg-gray-300">Subscribe</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
