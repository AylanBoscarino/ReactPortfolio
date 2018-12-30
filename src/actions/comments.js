import { FETCH_COMMENTS, WRITE_COMMENT } from './types';

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


export const writeComment = (corpo, token) => dispatch => {
    console.log({
        corpo, token
    })
    const url = 'http://morning-bayou-52363.herokuapp.com/api/comentarios';
    // const url = 'http://localhost:3004/api/comentarios';
    return fetch(url, {
        method: 'POST',
        headers: new Headers({
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify({corpo})
    })
    .then(response => response.json())
    .then(comment => dispatch({
        type: WRITE_COMMENT,
        payload: comment
    }))
}