
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-3 bg-black text-white fixed w-full z-50 shadow-md">
      <div className="flex items-center space-x-2">
        <Image src="/logo.png" alt="AlphaCandle Logo" width={50} height={50} />
        <span className="text-xl font-bold">AlphaCandle</span>
      </div>
      <ul className="flex gap-6 text-sm font-medium">
        <li><a href="/" className="hover:text-yellow-300">Home</a></li>
        <li><a href="/about" className="hover:text-yellow-300">About</a></li>
        <li><a href="/plans" className="hover:text-yellow-300">Plans</a></li>
        <li><a href="/contact" className="hover:text-yellow-300">Contact</a></li>
      </ul>
    </nav>
  );
}
