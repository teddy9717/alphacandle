
export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-black text-white fixed w-full z-50 shadow-md">
      <div className="text-2xl font-bold">AlphaCandle</div>
      <ul className="flex gap-6 text-sm font-medium">
        <li><a href="/" className="hover:text-gray-400">Home</a></li>
        <li><a href="/about" className="hover:text-gray-400">About</a></li>
        <li><a href="/services" className="hover:text-gray-400">Services</a></li>
        <li><a href="/plans" className="hover:text-gray-400">Plans</a></li>
        <li><a href="/results" className="hover:text-gray-400">Results</a></li>
        <li><a href="/blog" className="hover:text-gray-400">Blog</a></li>
        <li><a href="/contact" className="hover:text-gray-400">Contact</a></li>
      </ul>
    </nav>
  );
}
