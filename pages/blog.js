import Navbar from '../components/Navbar';

export default function Page() {
  return (
    <>
<Navbar />
<div className='pt-40 px-6 text-white bg-black min-h-screen'>
  <h2 className='text-3xl font-bold mb-6'>Crypto Insights & News</h2>
  <p className='text-gray-300'>Stay updated with AlphaCandle’s take on the latest market movements, token unlocks, ETF developments, and more. We regularly publish breakdowns of projects like StarkNet, Celestia, and LayerZero.</p>
</div>
</>
  );
}