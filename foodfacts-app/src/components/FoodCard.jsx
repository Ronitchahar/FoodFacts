import { useNavigate } from 'react-router-dom'

function FoodCard({ product }) {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/product/${product.code}`)
  }

  return (
    <div className="food-card" onClick={handleClick}>
      <h3>{product.product_name}</h3>
      <p>{product.brands}</p>
    </div>
  )
}

export default FoodCard