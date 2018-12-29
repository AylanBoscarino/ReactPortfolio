import React from 'react';
import 'bulma';
export default function Portfolio() {
    return (
        <section className="section" id="portfolio">
            <div className="container">
                <div className="section-heading">
                    <h3 className="title is-2">Portfolio</h3>
                    <h4 className="subtitle is-5">My latest works</h4>
                </div>
                <br />

                <div className="container portfolio-container">
                    <div className="columns">
                        {/* <!-- Série DevMedia --> */}
                        <div className="column is-4">
                            <div className="card">
                                <header className="card-header">
                                    <p className="card-header-title">
                                        <span>Introduction to Python</span>
                                        <span className="is-pulled-right">
                                            <span className="tag is-default">
                                                Course
                                            </span>
                                            <span className="tag is-default">
                                                DevMedia
                                            </span>
                                        </span>
                                    </p>
                                </header>
                                <div className="card-content">
                                    <figure className="image">
                                        <img
                                            src="https://www.devmedia.com.br/arquivos/serie/serie_python.png"
                                            alt="Ĩntrodução ao Python"
                                        />
                                    </figure>
                                </div>
                                <footer className="card-footer">
                                    <a
                                        href="https://www.devmedia.com.br/serie-python/"
                                        target="blank"
                                        className="card-footer-item">
                                        Preview
                                    </a>
                                    <a
                                        href="https://www.facebook.com/sharer/sharer.php?u=https://www.devmedia.com.br/serie-python/"
                                        target="blank"
                                        className="card-footer-item">
                                        Share on facebook
                                    </a>
                                </footer>
                            </div>
                        </div>
                        {/* Aqui é o fim */}

                        {/* <!-- Série DevMedia --> */}
                        <div className="column is-4">
                            <div className="card">
                                <header className="card-header">
                                    <p className="card-header-title">
                                        <span>ElasticSearch Project</span>
                                        <span className="is-pulled-right">
                                            <span className="tag is-default">
                                                Course
                                            </span>
                                            <span className="tag is-default">
                                                DevMedia
                                            </span>
                                        </span>
                                    </p>
                                </header>
                                <div className="card-content">
                                    <figure className="image">
                                        <img
                                            src="https://www.devmedia.com.br/arquivos/serie/serie_elasticsearch.png"
                                            alt="Ĩntrodução ao Elasticsearch"
                                        />
                                    </figure>
                                </div>
                                <footer className="card-footer">
                                    <a
                                        href="https://www.devmedia.com.br/elasticsearch/"
                                        target="blank"
                                        className="card-footer-item">
                                        Preview
                                    </a>
                                    <a
                                        href="https://www.facebook.com/sharer/sharer.php?u=https://www.devmedia.com.br/elasticsearch/"
                                        target="blank"
                                        className="card-footer-item">
                                        Share on facebook
                                    </a>
                                </footer>
                            </div>
                        </div>
                        {/* Aqui é o fim */}

                        {/* <!-- Série DevMedia --> */}
                        <div className="column is-4">
                            <div className="card">
                                <header className="card-header">
                                    <p className="card-header-title">
                                        <span>Unit Testing Applied</span>
                                        <span className="is-pulled-right">
                                            <span className="tag is-default">
                                                Course
                                            </span>
                                            <span className="tag is-default">
                                                DevMedia
                                            </span>
                                        </span>
                                    </p>
                                </header>
                                <div className="card-content">
                                    <figure className="image">
                                        <img
                                            src="https://www.devmedia.com.br/arquivos/serie/serie_receitas-caseiras-para-teste-unitario_40173.png"
                                            alt="Teste Unitério"
                                        />
                                    </figure>
                                </div>
                                <footer className="card-footer">
                                    <a
                                        href="https://www.devmedia.com.br/teste-unitario/"
                                        target="blank"
                                        className="card-footer-item">
                                        Preview
                                    </a>
                                    <a
                                        href="https://www.facebook.com/sharer/sharer.php?u=https://www.devmedia.com.br/teste-unitario/"
                                        target="blank"
                                        className="card-footer-item">
                                        Share on facebook
                                    </a>
                                </footer>
                            </div>
                        </div>
                        {/* Aqui é o fim */}
                    </div>
                </div>
            </div>
        </section>
    );
}
