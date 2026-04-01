import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addItem, removeItem } from '../store/savedSlice'
import { Button, Typography, Container } from '@mui/material'

function DetailPage() {
  const location = useLocation()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const saved = useSelector(s => s.saved.items)

  const product = location.state?.product

  // ✅ SAFE GUARD (important)
  if (!product) {
    return (
      <Container>
        <Typography variant="h6">Product not found</Typography>
        <Button onClick={() => navigate('/')}>Go Back</Button>
      </Container>
    )
  }

  const isSaved = saved.some(p => p.code === product.code)

  const handleClick = () => {
    if (isSaved) {
      dispatch(removeItem(product.code))
    } else {
      dispatch(addItem(product))
    }
  }

  return (
    <Container>
      <Button onClick={() => navigate(-1)}>Back</Button>

      <Typography variant="h5">
        {product.product_name || 'Unknown Product'}
      </Typography>

      <Typography variant="body1">
        Brand: {product.brands || 'N/A'}
      </Typography>

      <Typography variant="body1">
        Code: {product.code || 'N/A'}
      </Typography>

      <Button onClick={handleClick}>
        {isSaved ? 'Remove' : 'Save'}
      </Button>
    </Container>
  )
}

export default DetailPage