import React from 'react';
import 'bulma';

export default function Comment(props) {
    const comment = props.comment;
    const dataCriacao = new Date(comment.dataCriacao * 1000);
    const dia = dataCriacao.getDate();
    const mes = dataCriacao.getMonth();
    const ano = dataCriacao.getFullYear()
    const dataComentario = `${dia}/${mes}/${ano}`

    const avatarNumber = Math.floor((Math.random() * 100) + 1);
    return (
        <article className="media">
            <figure className="media-left">
                <p className="image is-64x64" >
                    <img
                        src={`https://api.adorable.io/avatars/${avatarNumber}`}
                        alt="você"
                    />
                </p>
            </figure>
            <div className="media-content">
                <div className="content">
                    <p>
                        <strong>{comment.nomeAutor}</strong> {' '}
                        <small>{dataComentario}</small>
                        <br />
                          {comment.corpo}
                    </p>
                </div>
                {/* <nav className="level is-mobile">
                    <div className="level-left">
                        <a className="level-item">
                            <span className="icon is-small">
                                <i className="fas fa-reply" />
                            </span>
                        </a>
                        <a className="level-item">
                            <span className="icon is-small">
                                <i className="fas fa-retweet" />
                            </span>
                        </a>
                        <a className="level-item">
                            <span className="icon is-small">
                                <i className="fas fa-heart" />
                            </span>
                        </a>
                    </div>
                </nav> */}
            </div>
            {/* <div className="media-right">
                <button className="delete" />
            </div> */}
        </article>
    );
}
