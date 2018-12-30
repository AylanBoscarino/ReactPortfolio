import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './style.css'

export class CommentWriter extends Component {
    // static propTypes = {
    //     prop: PropTypes
    // };

    render() {
        return (
            <article className="media">
                <figure className="media-left">
                    <p className="image is-64x64">
                        <img src="https://api.adorable.io/avatars/64" alt="Você" />
                    </p>
                </figure>
                <div className="media-content">
                    <div className="field">
                        <p className="control">
                            <textarea
                                className="textarea is-primary"
                                placeholder="Add a comment..."
                            />
                        </p>
                    </div>
                    <nav className="level">
                        <div className="level-left">
                            <div className="level-item">
                                <a className="button is-info">Submit</a>
                            </div>
                        </div>
                        {/* <div className="level-right">
                            <div className="level-item">
                                <label className="checkbox">
                                    <input type="checkbox" /> Press enter to
                                    submit
                                </label>
                            </div>
                        </div> */}
                    </nav>
                </div>
            </article>
        );
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CommentWriter);
