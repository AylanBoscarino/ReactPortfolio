import React from 'react';
import 'bulma';
import works from './data';

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
                        {works.map(work => (
                            <div className="column is-4" key={work.contentLink}>
                                <div className="card">
                                    <header className="card-header">
                                        <p className="card-header-title">
                                            <span>{work.title}</span>
                                            <span className="is-pulled-right">
                                                {work.tags.map((tag, index) => (
                                                    <span
                                                        className="tag is-default"
                                                        key={index}>
                                                        {tag}
                                                    </span>
                                                ))}
                                            </span>
                                        </p>
                                    </header>
                                    <div className="card-content">
                                        <figure className="image">
                                            <img
                                                src={work.imgSrc}
                                                alt={work.imgDesc}
                                            />
                                        </figure>
                                    </div>
                                    <footer className="card-footer">
                                        <a
                                            href={work.contentLink}
                                            target="blank"
                                            className="card-footer-item">
                                            {work.contentLabel}
                                        </a>
                                        <a
                                            href={work.shareLink}
                                            target="blank"
                                            className="card-footer-item">
                                            {work.shareLabel}
                                        </a>
                                    </footer>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
