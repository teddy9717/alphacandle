
export default function Navbar() {
  return (
    <nav className="fixed w-full top-0 bg-black bg-opacity-80 z-50 text-white px-6 py-4 flex justify-between items-center shadow">
      <h1 className="text-xl font-bold tracking-wide">AlphaCandle</h1>
      <ul className="flex gap-6 text-sm font-medium">
        <li><a href="#about" className="hover:text-yellow-400">About</a></li>
        <li><a href="#plans" className="hover:text-yellow-400">Plans</a></li>
        <li><a href="#results" className="hover:text-yellow-400">Results</a></li>
      </ul>
    </nav>
  );
}
