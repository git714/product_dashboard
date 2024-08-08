import { createSlice } from '@reduxjs/toolkit'
export const productSlice = createSlice({
    name: 'products',
    initialState: {
        value: {
            "count": 1,
            products: {
                1: {
                    "subcategory": "nodata",
                    "title": "nodata",
                    "price": "0",
                    "popularity": "0"
                }
            }
        }
    },
    reducers: {
        setProducts: (state, action) => {
            state.value = action.payload
        }
    }
})

// Action creators are generated for each case reducer function
export const { setProducts} = productSlice.actions

export default productSlice.reducer