import { Container, Typography, Grid, CircularProgress } from '@mui/material'
import SearchBar from '../components/SearchBar'
import FoodCard from '../components/FoodCard'
import useFoodSearch from '../hooks/useFoodSearch'
import ErrorMessage from '../components/ErrorMessage'

function HomePage() {
  const { results, loading, error, searchFood } = useFoodSearch()

  return (
    <Container sx={{ mt: 3 }}>
      <Typography variant="h4">Search for Food Products</Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Enter a food name to search for products in our database.
      </Typography>

      <SearchBar onSearch={searchFood} />

      {error && <ErrorMessage message={error} />}
      {loading && <CircularProgress />}

      {!loading && !error && results.length === 0 && (
        <Typography variant="h6" sx={{ mt: 2 }}>
          No results found. Try searching for "apple", "banana", or "bread".
        </Typography>
      )}

      <Grid container spacing={2} sx={{ mt: 2 }}>
        {results.map(p => (
          <Grid item xs={12} sm={6} md={4} key={p.code}>
            <FoodCard product={p} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default HomePage