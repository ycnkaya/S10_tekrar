import {request, success, error} from './productActions'
import {getProductsFromApi} from '../api/productApi'

export const productThunk = () => {
    return async (dispatch, getState) => {
        dispatch(request());

        try {
            const products = await getProductsFromApi();
            dispatch(success(products));
        } catch (error) {
            //dispatch(error(error.message));
        }
    }
};