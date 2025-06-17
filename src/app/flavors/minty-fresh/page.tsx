export default function MintyFresh() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-50 p-6">
      <div className="bg-white/90 rounded-2xl shadow-lg p-8 max-w-md w-full flex flex-col gap-6">
        <h1 className="text-3xl font-bold text-green-700 text-center mb-2">Minty Fresh</h1>
        <p className="text-gray-700 text-center">Cool, crisp, and refreshing! Minty Fresh is made with real mint and a touch of chocolate for a classic combo.</p>
        <div>
          <h2 className="text-lg font-semibold text-green-600 mb-1">Nutrition Facts (per 100g)</h2>
          <ul className="text-gray-800 text-sm list-disc list-inside">
            <li>Calories: 165</li>
            <li>Total Fat: 5.5g</li>
            <li>Saturated Fat: 3g</li>
            <li>Sugar: 19g</li>
            <li>Protein: 2.5g</li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-green-600 mb-1">Ingredients</h2>
          <ul className="text-gray-800 text-sm list-disc list-inside">
            <li>Cream</li>
            <li>Milk</li>
            <li>Sugar</li>
            <li>Fresh mint</li>
            <li>Chocolate chips</li>
          </ul>
        </div>
        <a href="/" className="mt-4 text-green-700 hover:underline text-center">&#8592; Back to Home</a>
      </div>
    </div>
  );
} 