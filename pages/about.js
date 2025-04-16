import Navbar from '../components/Navbar';

export default function Page() {
  return (
    <>
<Navbar />
<div className='pt-40 px-6 text-white bg-black min-h-screen'>
  <h2 className='text-3xl font-bold mb-4'>About AlphaCandle</h2>
  <p className='mb-4'>AlphaCandle is a global crypto signal platform founded by a team of professional traders, data scientists, and blockchain researchers. We focus on capturing early trends, identifying breakout opportunities, and delivering actionable insights in real-time.</p>
  <p className='mb-4'>Our methodology combines traditional technical analysis (TA), sentiment analysis, on-chain metrics, and short-term momentum tracking. We don’t just give signals — we guide you with risk management, market context, and exit strategies.</p>
  <p>With a commitment to transparency, security, and long-term profitability, AlphaCandle stands as your premium partner in navigating crypto markets with confidence.</p>
</div>
</>
  );
}