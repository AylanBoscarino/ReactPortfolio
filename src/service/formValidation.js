export function validarInputs(name, email, password, passwordConfirmation) {
    const emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // const passwordRegEx = /(?=.*[A-Za-z])(?=.*\d).{4,10}$/;
    const resultado = {
        valido: true,
        mensagem: ''
    }
    if (name.length < 3) {
        resultado.mensagem = 'nome precisa ter 3 ou mais caracteres';
        resultado.valido = false;
        return resultado;

    }

    if(!emailRegEx.test(email)) {
        resultado.mensagem = 'formato de email inválido'
        resultado.valido = false;
        return resultado;
    }

    if (password.length < 3) {
        resultado.mensagem = 'a senha precisa ter 3 ou mais caracteres'
        resultado.valido = false;
        return resultado;
    }

    if (password !== passwordConfirmation) {
        resultado.mensagem = 'o campo de confirmação precisa ser igual a senha'
        resultado.valido = false;
        return resultado;
    }

    return resultado;
}
