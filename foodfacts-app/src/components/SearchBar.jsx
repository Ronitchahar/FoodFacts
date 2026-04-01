import { useState } from 'react'
import { TextField, Button, Box } from '@mui/material'

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!query.trim()) {
      setError('Enter food name')
      return
    }

    if (query.length < 2) {
      setError('Minimum 2 characters')
      return
    }

    setError('')
    onSearch(query)
  }

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', gap: 1, mb: 2 }}>
      <TextField
        fullWidth
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search food products..."
        error={!!error}
        helperText={error}
        variant="outlined"
      />
      <Button type="submit" variant="contained" color="primary">
        Search
      </Button>
    </Box>
  )
}

export default SearchBar