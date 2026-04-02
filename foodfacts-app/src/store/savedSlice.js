import { createSlice } from '@reduxjs/toolkit'

const loadFromStorage = () => {
  try {
    const data = localStorage.getItem('foodfacts-saved')
    return data ? JSON.parse(data) : []
  } catch {
    return []
  }
}

const savedSlice = createSlice({
  name: 'saved',
  initialState: {
    items: loadFromStorage()
  },
  reducers: {
    addItem: (state, action) => {
      const exists = state.items.some(i => i.code === action.payload.code)
      if (!exists) state.items.push(action.payload)
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(i => i.code !== action.payload)
    }
  }
})

export const { addItem, removeItem } = savedSlice.actions
export default savedSlice.reducer