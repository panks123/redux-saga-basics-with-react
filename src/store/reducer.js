const initialState = {
    loading: false,
    data: [],
    error: null
}
export const userReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'FETCH_USERS_REQUEST':
            return {
                ...state,
                loading: true
            }
        case 'FETCH_USERS_SUCCESS':
            return {
                loading: false,
                data: action.payload,
                error: null
            }
        case 'FETCH_USERS_FAILURE':
            return {
                loading: false,
                data: [],
                error: action.payload
            }
        default:
            return state
    }
}