import Link from "next/link";

export default function BlueberryBliss() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-purple-50 p-6">
      <div className="bg-white/90 rounded-2xl shadow-lg p-8 max-w-md w-full flex flex-col gap-6">
        <h1 className="text-3xl font-bold text-purple-700 text-center mb-2">Blueberry Bliss</h1>
        <p className="text-gray-700 text-center">Bursting with juicy blueberries and a hint of lemon, this flavor is a refreshing treat for berry lovers.</p>
        <div>
          <h2 className="text-lg font-semibold text-purple-600 mb-1">Nutrition Facts (per 100g)</h2>
          <ul className="text-gray-800 text-sm list-disc list-inside">
            <li>Calories: 175</li>
            <li>Total Fat: 6g</li>
            <li>Saturated Fat: 3.5g</li>
            <li>Sugar: 21g</li>
            <li>Protein: 2.5g</li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-purple-600 mb-1">Ingredients</h2>
          <ul className="text-gray-800 text-sm list-disc list-inside">
            <li>Blueberries</li>
            <li>Cream</li>
            <li>Milk</li>
            <li>Sugar</li>
            <li>Lemon zest</li>
          </ul>
        </div>
        <Link href="/" className="mt-4 text-purple-700 hover:underline text-center block">&#8592; Back to Home</Link>
      </div>
    </div>
  );
} 