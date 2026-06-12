export const REQUEST = 'REQUEST';
export const SUCCESS = 'SUCCESS';
export const ERROR = 'ERROR';

export const request = () => ({
    type: REQUEST
});

export const success = (products) => ({
    type: SUCCESS,
    payload: products
});

export const error = (errMsg) => ({
    type: ERROR,
    payload: errMsg
});