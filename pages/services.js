import Navbar from '../components/Navbar';

export default function Page() {
  return (
    <>
<Navbar />
<div className='pt-40 px-6 text-white bg-black min-h-screen'>
  <h2 className='text-3xl font-bold mb-6'>Our Services</h2>
  <ul className='list-disc ml-6 space-y-3'>
    <li>📈 Binance Spot & Futures Signals with 85%+ Accuracy</li>
    <li>🔍 Daily Market Outlooks & Technical Breakdowns</li>
    <li>💡 High-Potential Altcoin Analysis before major listings</li>
    <li>📊 Portfolio Structuring & Risk Allocation Consulting</li>
    <li>🤖 Cornix-compatible automation support</li>
  </ul>
</div>
</>
  );
}