import Navbar from '../components/Navbar';

export default function Page() {
  return (
    <>
<Navbar />
<div className='pt-40 px-6 text-white bg-black min-h-screen text-center'>
  <h2 className='text-3xl font-bold mb-6'>Choose Your Plan</h2>
  <div className='grid md:grid-cols-3 gap-6 max-w-5xl mx-auto'>
    <div className='bg-gray-800 p-6 rounded-xl'>
      <h3 className='text-xl font-semibold mb-2'>1 Month</h3>
      <p className='mb-4'>$99 - Ideal for short-term traders and first-time members.</p>
    </div>
    <div className='bg-gray-800 p-6 rounded-xl'>
      <h3 className='text-xl font-semibold mb-2'>3 Months</h3>
      <p className='mb-4'>$249 - Great for swing traders who want consistency.</p>
    </div>
    <div className='bg-gray-800 p-6 rounded-xl'>
      <h3 className='text-xl font-semibold mb-2'>12 Months</h3>
      <p className='mb-4'>$599 - Long-term strategy access with exclusive benefits.</p>
    </div>
  </div>
</div>
</>
  );
}