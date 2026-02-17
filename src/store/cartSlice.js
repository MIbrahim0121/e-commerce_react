import { createSlice } from '@reduxjs/toolkit'

const loadCart = () => {
    try {
        const serialized = localStorage.getItem('cart')
        return serialized ? JSON.parse(serialized) : []
    } catch (_) {
        return []
    }
}

const saveCart = (cart) => {
    try {
        localStorage.setItem('cart', JSON.stringify(cart))
    } catch (_) {
        // ignore write errors
    }
}

const initialState = {
    products: [],
    cart: loadCart(),
    status: 'idle',
    error: null,
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const existingProduct = state.cart.find(item => item.id === action.payload.id)
            if (existingProduct) {
                existingProduct.quantity += 1
                existingProduct.totalPrice = existingProduct.price * existingProduct.quantity
            } else {
                state.cart.push({ ...action.payload, quantity: 1, totalPrice: action.payload.price })
            }
            saveCart(state.cart)
        },
        decrement: (state, action) => {
            const item = state.cart.find(item => item.id === action.payload)
            if (item) {
                if (item.quantity > 1) {
                    item.quantity -= 1
                    item.totalPrice = item.price * item.quantity
                } else {
                    state.cart = state.cart.filter((i) => i.id !== action.payload)
                }
            }
            saveCart(state.cart)

        },
        increment: (state, action) => {
            const item = state.cart.find(item => item.id === action.payload)
            if (item) {
                item.quantity += 1
                item.totalPrice = item.price * item.quantity
            }
            saveCart(state.cart)

        },
        removeToCart: (state, action) => {
            state.cart = state.cart.filter(item => item.id !== action.payload)
            saveCart(state.cart)
        }
    }
})

export const { addToCart, removeToCart, decrement, increment } = productSlice.actions
export default productSlice.reducer
