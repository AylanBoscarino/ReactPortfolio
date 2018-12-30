import React, { Component } from 'react';
import { connect } from 'react-redux';
import './style.css';

import { writeComment } from '../../../actions/comments';

export class CommentWriter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            corpoComentario: '',
            urlAvatar: `https://api.adorable.io/avatars/${Math.floor(Math.random() * 100 + 1)}`
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.onTextChange = this.onTextChange.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();
        const corpoComentario = this.state.corpoComentario;
        const token = this.props.user.token;
        this.props.writeComment(
            corpoComentario,
            token
        );
        this.setState({corpoComentario: ''});
    }

    onTextChange(e) {
        this.setState({
            corpoComentario: e.target.value
        });
    }

    render() {
        return (
            <article className="media">
                <figure className="media-left">
                    <p className="image is-64x64">
                        <img src={this.state.urlAvatar} alt="Você" />
                    </p>
                </figure>
                <div className="media-content">
                    <p>
                        <strong>{this.props.userName}</strong>
                    </p>
                    <div className="field">
                        <p className="control">
                            <textarea
                                className="textarea is-primary"
                                placeholder="Add a comment..."
                                value={this.state.corpoComentario}
                                onChange={this.onTextChange}
                            />
                        </p>
                    </div>
                    <nav className="level">
                        <div className="level-left">
                            <div className="level-item">
                                <a
                                    className="button is-info"
                                    href="/"
                                    onClick={this.onSubmit}>
                                    Submit
                                </a>
                            </div>
                        </div>
                    </nav>
                </div>
            </article>
        );
    }
}

const mapStateToProps = state => ({
    ...state.auth
});

const mapDispatchToProps = {
    writeComment
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CommentWriter);
