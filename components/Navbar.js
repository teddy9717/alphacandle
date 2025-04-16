
export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6 bg-black text-white fixed top-0 left-0 w-full shadow-md z-50">
      <div className="text-2xl font-bold">AlphaCandle</div>
      <ul className="flex gap-6 text-sm font-medium">
        <li><a href="/" className="hover:text-gray-400">Home</a></li>
        <li><a href="/about" className="hover:text-gray-400">About</a></li>
        <li><a href="/services" className="hover:text-gray-400">Services</a></li>
        <li><a href="/plans" className="hover:text-gray-400">Subscribe</a></li>
        <li><a href="/contact" className="hover:text-gray-400">Contact</a></li>
      </ul>
    </nav>
  );
}
