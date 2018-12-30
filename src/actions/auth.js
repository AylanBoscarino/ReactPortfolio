import { LOGIN, SIGNUP } from './types';
import jwtDecode from 'jwt-decode'

export const login = (email, senha) => dispatch => {
    const body = JSON.stringify({
        email, 
        senha
    });
    const url = 'http://morning-bayou-52363.herokuapp.com/api/usuarios/login';

    return fetchPostAuth(url, body, dispatch, LOGIN);
}

export const signup = (nome, email, senha) => dispatch => {
    const body = JSON.stringify({
        nome, email, senha
    });
    const url = 'http://morning-bayou-52363.herokuapp.com/api/usuarios';
    
    return fetchPostAuth(url, body, dispatch, SIGNUP)
}

function fetchPostAuth(url, body, dispatch, type) {
    return fetch(url, {
        method: 'POST',
        headers: new Headers({
            'Content-Type': 'application/json'
        }),
        body
        
    })
    .then(response => {
        if(response.status === 401) throw new Error('Usuário ou senha inválidos')
        if(response.status === 500) throw new Error('Algo de errado não está certo')
        return response
    })
    .then(response => response.json())
    .then(({ token }) => {
        const userData = jwtDecode(token)
        return { token, ...userData }
    })
    .then(data => dispatch({
        type,
        payload: data
    }))
    .catch(err => console.log(err));
}