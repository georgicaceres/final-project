import axios from 'axios';

export const FETCH_PRODUCTS = 'fetch_products';
export const CLEAR_PRODUCTS = 'clear_products';
export const FETCH_PRODUCT = 'fetch_product';
export const ERROR = 'error';

const ROOT_URL = '/api/items';

export function fetchProducts(search_term, callback) {
    const request = axios.get(`${ROOT_URL}${search_term}`, search_term);

    return (dispatch) => {
        dispatch({type: CLEAR_PRODUCTS});
        request.then(({data}) => {
            dispatch({ type: FETCH_PRODUCTS, payload: data});
        })
        .catch((error) => {
            dispatch({type: ERROR, response: error.response});
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
            dispatch({type: ERROR, response: error.response});
        });
    };
};
