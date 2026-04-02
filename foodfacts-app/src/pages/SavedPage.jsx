import { useNavigate } from 'react-router-dom'

function SavedPage({ saved, dispatch }) {
  const navigate = useNavigate()

  if (!saved.length) return <p>No saved items</p>

  return (
    <div>
      <h2>Saved Items</h2>

      {saved.map((p) => (
        <div key={p.code}>
          <p>{p.product_name}</p>

          <button onClick={() => navigate(`/product/${p.code}`)}>
            View
          </button>

          <button onClick={() => dispatch({ type: 'REMOVE', code: p.code })}>
            Remove
          </button>
        </div>
      ))}
    </div>
  )
}

export default SavedPage