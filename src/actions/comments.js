import { FETCH_COMMENTS } from './types';

export const fetchComments = () => dispatch => {
    const url = 'https://morning-bayou-52363.herokuapp.com/api/comentarios';
    return fetch(url)
        .then(response => response.json())
        .then(comments =>
            dispatch({
                type: FETCH_COMMENTS,
                payload: comments
            })
        )
        .catch(err => console.log(err));
};
