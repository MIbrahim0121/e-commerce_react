import { createSlice } from '@reduxjs/toolkit'

const loadCart = () => {
    try {
        const serialized = localStorage.getItem('cart')
        return serialized ? JSON.parse(serialized) : []
    } catch (error) {
        console.error('Error loading cart from localStorage:', error)
        return []
    }
}

const saveCart = (cart) => {
    try {
        localStorage.setItem('cart', JSON.stringify(cart))
    } catch (error) {
        console.error('Error saving cart to localStorage:', error)
    }
}

const loadWishlist = () => {
    try {
        const serialized = localStorage.getItem('wishlist')
        return serialized ? JSON.parse(serialized) : []
    } catch (error) {
        console.error('Error loading wishlist from localStorage:', error)
        return []
    }
}

const saveWishlist = (wishlist) => {
    try {
        localStorage.setItem('wishlist', JSON.stringify(wishlist))
    } catch (error) {
        console.error('Error saving wishlist to localStorage:', error)
    }
}

const initialState = {
    products: [],
    cart: loadCart(),
    wishlist: loadWishlist(),
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
        },
        addToWishlist: (state, action) => {
            const exists = state.wishlist.find(item => item.id === action.payload.id)
            if (!exists) {
                state.wishlist.push(action.payload)
                saveWishlist(state.wishlist)
            }
        },
        removeFromWishlist: (state, action) => {
            state.wishlist = state.wishlist.filter(item => item.id !== action.payload)
            saveWishlist(state.wishlist)
        },
        clearWishlist: (state) => {
            state.wishlist = []
            saveWishlist(state.wishlist)
        }
    }
})

export const { addToCart, removeToCart, decrement, increment, addToWishlist, removeFromWishlist, clearWishlist } = productSlice.actions
export default productSlice.reducer
