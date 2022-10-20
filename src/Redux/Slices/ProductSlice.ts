import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Product } from "../../types"


interface InitialStateProduct {
    products: Product[] | null
}

const initialState: InitialStateProduct = {
    products: null
}

export const productSlice = createSlice({
    initialState,
    name: "products",
    reducers: {
        initialize: (state: InitialStateProduct, action: PayloadAction<Product[]>) => {
            state.products = action.payload
        }
    }
})


export const { initialize } = productSlice.actions
export default productSlice.reducer