import { useSelector, useDispatch } from 'react-redux'
import { removeItem } from '../store/savedSlice'
import { Container, Typography, Button } from '@mui/material'

function SavedPage() {
  const items = useSelector(s => s.saved.items)
  const dispatch = useDispatch()

  return (
    <Container>
      <Typography variant="h4">Saved</Typography>

      {items.length === 0 && <Typography>No items saved</Typography>}

      {items.map(p => (
        <div key={p.code}>
          <Typography>{p.product_name}</Typography>

          <Button onClick={() => dispatch(removeItem(p.code))}>
            Remove
          </Button>
        </div>
      ))}
    </Container>
  )
}

export default SavedPage