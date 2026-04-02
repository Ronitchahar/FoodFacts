import { useState } from 'react'

function useFoodSearch() {
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const searchFood = async (query) => {
    setLoading(true)
    setError(null)

    try {
      const res = await fetch(
        `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${encodeURIComponent(query)}&json=1&page_size=10`
      )

      const data = await res.json()

      const filtered = (data.products || []).filter(
        (p) => p.product_name && p.product_name.trim() !== ''
      )

      setResults(filtered)
    } catch (err) {
      setError('Network error. Check connection.')
      setResults([])
    } finally {
      setLoading(false)
    }
  }

  return { results, loading, error, searchFood }
}

export default useFoodSearch