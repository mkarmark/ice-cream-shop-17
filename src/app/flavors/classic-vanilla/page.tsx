export default function ClassicVanilla() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-yellow-50 p-6">
      <div className="bg-white/90 rounded-2xl shadow-lg p-8 max-w-md w-full flex flex-col gap-6">
        <h1 className="text-3xl font-bold text-yellow-700 text-center mb-2">Classic Vanilla</h1>
        <p className="text-gray-700 text-center">Timeless, smooth, and aromatic. Our Classic Vanilla is made with real vanilla beans for a rich, authentic taste.</p>
        <div>
          <h2 className="text-lg font-semibold text-yellow-600 mb-1">Nutrition Facts (per 100g)</h2>
          <ul className="text-gray-800 text-sm list-disc list-inside">
            <li>Calories: 170</li>
            <li>Total Fat: 6g</li>
            <li>Saturated Fat: 3.5g</li>
            <li>Sugar: 20g</li>
            <li>Protein: 3g</li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-yellow-600 mb-1">Ingredients</h2>
          <ul className="text-gray-800 text-sm list-disc list-inside">
            <li>Cream</li>
            <li>Milk</li>
            <li>Sugar</li>
            <li>Egg yolks</li>
            <li>Vanilla beans</li>
          </ul>
        </div>
        <a href="/" className="mt-4 text-yellow-700 hover:underline text-center">&#8592; Back to Home</a>
      </div>
    </div>
  );
} 