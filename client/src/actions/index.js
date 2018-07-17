import axios from 'axios';

export const CHANGE_PHOTO = 'change_photo';
export const FETCH_PRODUCTS = 'fetch_products';
export const CLEAR_PRODUCTS = 'clear_products';
export const FETCH_PRODUCT = 'fetch_product';
export const NOT_FOUND = 'not_found';
export const ID_NOT_FOUND = 'id_not_found';

const ROOT_URL = '/api/items';

export function changePhoto(currentImageIndex) {
    return {type: CHANGE_PHOTO, currentImageIndex};
}

export function fetchProducts(search_term, callback) {
    const request = axios.get(`${ROOT_URL}${search_term}`, search_term);

    return (dispatch) => {
        dispatch({type: CLEAR_PRODUCTS});
        request.then(({data}) => {
            dispatch({ type: FETCH_PRODUCTS, payload: data});
        })
        .catch((error) => {
            dispatch({type: NOT_FOUND, search_term})
        });
    };
};

export function fetchProduct(id) {
    const request = axios.get(`${ROOT_URL}/${id}`);

    return (dispatch) => {
        request.then(({data}) => {
            dispatch({ type: FETCH_PRODUCT, payload: data});
        })
        .catch((error) => {
            dispatch({type: ID_NOT_FOUND, id})
        });
    };
};
