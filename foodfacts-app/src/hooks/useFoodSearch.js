import { useState } from 'react'

function useFoodSearch() {
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const searchFood = async (query) => {
    setLoading(true)
    setError(null)

    try {
      // Mock data for demonstration since API is rate-limited
      const mockProducts = [
        {
          code: '1234567890123',
          product_name: 'Apple Juice',
          brands: 'Fresh Farms'
        },
        {
          code: '9876543210987',
          product_name: 'Banana Bread',
          brands: 'Home Bakery'
        },
        {
          code: '4567890123456',
          product_name: 'Orange Soda',
          brands: 'Sweet Drinks'
        }
      ]

      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000))

      // Filter mock data based on query
      const filtered = mockProducts.filter(p =>
        p.product_name.toLowerCase().includes(query.toLowerCase()) ||
        p.brands.toLowerCase().includes(query.toLowerCase())
      )

      setResults(filtered)
    } catch {
      setError('Network error. Check connection.')
      setResults([])
    } finally {
      setLoading(false)
    }
  }

  return { results, loading, error, searchFood }
}

export default useFoodSearch