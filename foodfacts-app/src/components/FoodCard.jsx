function FoodCard({ product }) {
  if (!product) return null

  const { product_name, brands, nutriments, image_small_url } = product

  return (
    <div className="food-card">
      {image_small_url && (
        <img src={image_small_url} alt={product_name} />
      )}

      <h2>{product_name || 'Unknown Product'}</h2>
      <p>{brands || 'No Brand'}</p>

      <p>Calories: {nutriments?.['energy-kcal_100g'] ?? 'N/A'}</p>
      <p>Protein: {nutriments?.proteins_100g ?? 'N/A'}</p>
      <p>Carbs: {nutriments?.carbohydrates_100g ?? 'N/A'}</p>
      <p>Fat: {nutriments?.fat_100g ?? 'N/A'}</p>
    </div>
  )
}

export default FoodCard