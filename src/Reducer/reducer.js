export const reducer = (state, action) => {

    switch (action.type) {
        case 'API_REQ':
            return {
                ...state,
                products: action.payload
            }

        case 'SINGLE_API_DATA':
            return {
                ...state,
                singleProduct: action.payload
            }
        case 'ADD_TO_STORE': {

            const productAlreadyInCart = state.cart.find(item => item.id === action.payload.id);
            if (productAlreadyInCart) {
                return {
                    ...state,
                    cart: state.cart.map(x => {
                        if (x.id === action.payload.id) {
                            return {
                                ...x,
                                qty: x.qty + 1
                            }
                        }
                        else return x
                    })
                }
            }
            else {
                return {
                    ...state,
                    cart: [...state.cart, { qty: 1, ...action.payload }]
                }
            }
        }
        case 'REMOVE_TO_STORE': {
            return {
                ...state,
                cart: state.cart.filter(t => t.id !== action.payload)
            }
        }
        case 'INCR': {
            return {
                ...state,
                cart: state.cart.map(x => {
                    if (x.id === action.payload) {

                        return {
                            ...x,
                            qty: x.qty + 1
                        }
                    }
                    else
                        return x
                })
            }
        }
        case 'DECRE': {
            return {
                ...state,
                cart: state.cart.map(y => {
                    if (y.id === action.payload) {
                        let dec = y.qty - 1
                        if (dec <= 1)
                            dec = 1
                        return {
                            ...y,
                            qty: dec
                        }
                    }
                    else
                        return y
                })
            }

        }


        default:
            return state
    }
}


export const productReducer = (state, action) => {

    switch (action.type) {
        case 'SEARCH':
            return {
                ...state,
                input: action.payload

            }
        case 'SELECT_VALUE':
            return {
                ...state,
                selectCompany: action.payload
            }
        case 'CATEGORY':
            return {
                ...state,
                category: action.payload
            }
        case 'RANGE':
            return {
                ...state,
                selectPrice: Number(action.payload)
            }
        case 'CLEAR_FILTER':
            return {
                input: '',
                selectCompany: '',
                category: 'all',
                selectPrice: 0

            }
        default:
            return state
    }
}