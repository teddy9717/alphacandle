import Navbar from '../components/Navbar';

export default function Page() {
  return (
    <>
<Navbar />
<div className='pt-40 px-6 text-white bg-black min-h-screen'>
  <h2 className='text-3xl font-bold mb-6'>Contact Us</h2>
  <p className='mb-3'>📧 Email: support@alphacandle.org</p>
  <p className='mb-3'>💬 Telegram: @alphacandle_support</p>
  <p className='mb-3'>⏰ Response Time: Mon–Fri 10:00–18:00 (UTC+9)</p>
</div>
</>
  );
}