import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

function DetailPage({ saved, dispatch }) {
  const { barcode } = useParams()
  const navigate = useNavigate()

  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false

    const fetchData = async () => {
      try {
        const res = await axios.get(
          `https://world.openfoodfacts.org/api/v0/product/${barcode}.json`
        )

        if (!cancelled) {
          setProduct(res.data.product)
          setLoading(false)
        }
      } catch {
        if (!cancelled) setLoading(false)
      }
    }

    fetchData()

    return () => (cancelled = true)
  }, [barcode])

  if (loading) return <p>Loading...</p>
  if (!product) return <p>No product</p>

  const isSaved = saved.some(p => p.code === barcode)

  return (
    <div>
      <button onClick={() => navigate(-1)}>Back</button>

      <h2>{product.product_name}</h2>

      <button
        onClick={() =>
          dispatch(
            isSaved
              ? { type: 'REMOVE', code: barcode }
              : { type: 'ADD', product }
          )
        }
      >
        {isSaved ? 'Remove' : 'Save'}
      </button>
    </div>
  )
}

export default DetailPage