import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import CommentList from '../comment-list/CommentList';
import FormAuth from '../form/FormAuth';
import CommentWriter from '../comment-writer/CommentWriter';

export class FooterScreen extends Component {
    static propTypes = {
        isLoged: PropTypes.bool
    };

    render() {
        const isLoged = this.props.user.token && true;
        return (
            <div className="section">
                <div className="section-heading">
                    <h3 className="title is-2">
                    Comments
                    </h3>
                </div>
                <br/>
                <br/>
                <br/>
                <div className="container">
                    <CommentList />
                </div>
                <br />
                <br/>
                <br/>
                <br/>
                <br/>

                <h4 className="title is-4">
                  You can leave me a nice comment.
                </h4>

                {isLoged ? (
                    <CommentWriter userName={this.props.user.nome} />
                ) : (
                    <FormAuth />
                )}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    ...state.auth
});

const mapDispatchToProps = {};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FooterScreen);
