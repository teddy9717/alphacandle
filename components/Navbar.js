
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-black text-white py-4 px-8 flex justify-between items-center z-50 shadow-md">
      <div className="flex items-center gap-3">
        <Image src="/logo.png" alt="AlphaCandle Logo" width={40} height={40} />
        <span className="text-xl font-bold">AlphaCandle</span>
      </div>
      <ul className="flex gap-6 text-sm">
        <li><a href="#about" className="hover:text-yellow-400">About</a></li>
        <li><a href="#features" className="hover:text-yellow-400">Features</a></li>
        <li><a href="#plans" className="hover:text-yellow-400">Plans</a></li>
        <li><a href="#results" className="hover:text-yellow-400">Results</a></li>
      </ul>
    </nav>
  );
}
