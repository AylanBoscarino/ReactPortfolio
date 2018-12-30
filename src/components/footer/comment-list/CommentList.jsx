import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'bulma';

import { fetchComments } from '../../../actions/comments';
import Comment from '../comment/Comment';

export class CommentList extends Component {
    componentDidMount = () => {
        this.props.fetchComments();
    };

    render() {
        const comments = this.props.comments.map(comment => (
            <Comment key={comment._id} comment={comment} />
        ));
        return <div>{comments}</div>;
    }
}

const mapStateToProps = state => ({
    ...state.comments
});

const mapDispatchToProps = {
    fetchComments
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CommentList);
