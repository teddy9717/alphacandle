import Navbar from '../components/Navbar';

export default function Page() {
  return (
    <>
<Navbar />
<section className='pt-40 text-center text-white bg-black min-h-screen'>
  <h1 className='text-5xl font-bold mb-4'>Trade Smarter with AlphaCandle</h1>
  <p className='text-gray-300 text-lg'>We deliver premium Binance signals and insights that help you ride the momentum before the rest of the market.</p>
  <a href='/plans' className='inline-block mt-6 px-6 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-300'>View Plans</a>
</section>
</>
  );
}