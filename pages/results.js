import Navbar from '../components/Navbar';

export default function Page() {
  return (
    <>
<Navbar />
<div className='pt-40 px-6 text-white bg-black min-h-screen'>
  <h2 className='text-3xl font-bold mb-6'>Performance Results</h2>
  <ul className='space-y-3 text-lg text-gray-300'>
    <li>🚀 TIA +149% (Feb 2025)</li>
    <li>📈 OP +84% (Jan 2025)</li>
    <li>🔥 SUI +51% (Feb 2025)</li>
    <li>💰 RNDR +57%, AAVE +112%, DYDX +74%</li>
  </ul>
</div>
</>
  );
}