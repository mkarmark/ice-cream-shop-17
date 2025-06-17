import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-gradient-to-b from-pink-100 to-yellow-100 p-6">
      <main className="flex flex-col items-center gap-8 w-full max-w-lg bg-white/80 rounded-2xl shadow-lg p-8">
        <h1 className="text-4xl font-bold text-pink-600 drop-shadow-sm text-center">Welcome to Sweet Scoops!</h1>
        <p className="text-lg text-gray-700 text-center max-w-md">
          Discover the best ice cream in town! Fresh, creamy, and made with love. Choose from our classic and seasonal flavors, or just come by for a smile.
        </p>
        <div className="w-full">
          <h2 className="text-xl font-semibold text-yellow-700 mb-2 text-center">Popular Flavors</h2>
          <ul className="grid grid-cols-2 gap-3 text-center text-base text-gray-800">
            <li>
              <Link href="/flavors/strawberry-dream" className="block bg-pink-200 rounded-lg py-2 hover:bg-pink-300 transition font-medium">Strawberry Dream</Link>
            </li>
            <li>
              <Link href="/flavors/classic-vanilla" className="block bg-yellow-200 rounded-lg py-2 hover:bg-yellow-300 transition font-medium">Classic Vanilla</Link>
            </li>
            <li>
              <Link href="/flavors/blueberry-bliss" className="block bg-purple-200 rounded-lg py-2 hover:bg-purple-300 transition font-medium">Blueberry Bliss</Link>
            </li>
            <li>
              <Link href="/flavors/minty-fresh" className="block bg-green-200 rounded-lg py-2 hover:bg-green-300 transition font-medium">Minty Fresh</Link>
            </li>
          </ul>
        </div>
        <button className="mt-6 px-6 py-3 bg-pink-500 text-white rounded-full font-semibold shadow hover:bg-pink-600 transition">Visit Us Today!</button>
      </main>
      <footer className="mt-10 text-gray-500 text-sm text-center">&copy; {new Date().getFullYear()} Sweet Scoops Ice Cream Shop</footer>
    </div>
  );
}
