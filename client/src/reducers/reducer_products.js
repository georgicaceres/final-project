import { FETCH_PRODUCTS, FETCH_PRODUCT, CLEAR_PRODUCTS, ERROR }  from '../actions';

export default function(state = {}, action) {
    switch (action.type) {
    case FETCH_PRODUCT:
        return { ...state, [action.payload.item.id]: action.payload.item, error: null};
    case CLEAR_PRODUCTS:
        return { ...state, preview: null, breadcrumb: null, error: null};
    case FETCH_PRODUCTS:
        return { ...state, preview: action.payload.items, breadcrumb: action.payload.categories, error: null};
    case ERROR:
        return { ...state, error: action.response};
    default:
        return state;
    }
}
