import { Card, CardContent, Typography, CardActionArea, Chip } from '@mui/material'
import { useNavigate } from 'react-router-dom'

function FoodCard({ product }) {
  const navigate = useNavigate()

  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardActionArea
        sx={{ flexGrow: 1 }}
        onClick={() =>
          navigate(`/product/${product.code}`, { state: { product } })
        }
      >
        <CardContent>
          <Typography variant="h6" component="div" gutterBottom>
            {product.product_name || 'Unknown Product'}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            Brand: {product.brands || 'N/A'}
          </Typography>

          <Chip
            label={`Code: ${product.code || 'N/A'}`}
            size="small"
            variant="outlined"
            sx={{ mt: 1 }}
          />
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default FoodCard