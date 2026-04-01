import FoodCard from './FoodCard'

function FoodList({ products }) {
  if (!products.length) return <p>No results found</p>

  return (
    <div className="food-list">
      {products.map((p, i) => (
        <FoodCard key={p.code || i} product={p} />
      ))}
    </div>
  )
}

export default FoodList