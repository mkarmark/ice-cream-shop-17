import Link from "next/link";

export default function StrawberryDream() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-pink-50 p-6">
      <div className="bg-white/90 rounded-2xl shadow-lg p-8 max-w-md w-full flex flex-col gap-6">
        <h1 className="text-3xl font-bold text-pink-600 text-center mb-2">Strawberry Dream</h1>
        <p className="text-gray-700 text-center">A creamy, dreamy blend of ripe strawberries and rich cream. Our most popular fruity flavor!</p>
        <div>
          <h2 className="text-lg font-semibold text-pink-500 mb-1">Nutrition Facts (per 100g)</h2>
          <ul className="text-gray-800 text-sm list-disc list-inside">
            <li>Calories: 180</li>
            <li>Total Fat: 7g</li>
            <li>Saturated Fat: 4g</li>
            <li>Sugar: 22g</li>
            <li>Protein: 3g</li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-pink-500 mb-1">Ingredients</h2>
          <ul className="text-gray-800 text-sm list-disc list-inside">
            <li>Fresh strawberries</li>
            <li>Cream</li>
            <li>Milk</li>
            <li>Sugar</li>
            <li>Natural flavors</li>
          </ul>
        </div>
        <Link href="/" className="mt-4 text-pink-600 hover:underline text-center block">&#8592; Back to Home</Link>
      </div>
    </div>
  );
} 