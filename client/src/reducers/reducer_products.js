import { FETCH_PRODUCTS, FETCH_PRODUCT, CLEAR_PRODUCTS, CHANGE_PHOTO, ID_NOT_FOUND, NOT_FOUND  }  from '../actions';

export default function(state = {}, action) {
    switch (action.type) {
    case CHANGE_PHOTO:
        return {...state, currentImageIndex: action.currentImageIndex}
    case FETCH_PRODUCT:
        return { ...state, [action.payload.item.id]: action.payload.item, currentImageIndex: 0};
    case CLEAR_PRODUCTS:
        return { ...state, preview: null, breadcrumb: null};
    case FETCH_PRODUCTS:
        return { ...state, preview: action.payload.items, breadcrumb: action.payload.categories};
    case ID_NOT_FOUND:
        return {...state, [action.id]: {missing: true}};
    case NOT_FOUND:
        return {...state, preview: {missing: true}};
    default:
        return state;
    }
}
