import * as actionTypes from './actionTypes';

export const setRedux = state => dispatch => {
    dispatch({
        type: actionTypes.SET,
        payload: state
    })
}

export const cleanRedux = state => dispatch => {
    dispatch({
        type: actionTypes.CLEAN,
        payload: state
    })
}
