import Navbar from '../components/Navbar';

export default function Page() {
  return (
    <><Navbar />
<div className='pt-40 px-6 text-white bg-black min-h-screen text-center'>
<h2 className='text-3xl font-bold mb-6'>Choose Your Plan</h2>
<div className='grid md:grid-cols-3 gap-6 max-w-5xl mx-auto'>
<div className='bg-gray-800 p-6 rounded-xl'>
<h3 className='text-xl font-semibold'>1 Month</h3><p>$99</p>
</div>
<div className='bg-gray-800 p-6 rounded-xl'>
<h3 className='text-xl font-semibold'>3 Months</h3><p>$249</p>
</div>
<div className='bg-gray-800 p-6 rounded-xl'>
<h3 className='text-xl font-semibold'>12 Months</h3><p>$599</p>
</div>
</div>
</div></>
  );
}