import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'bulma';

import { fetchComments } from '../../actions/comments';
import Comment from '../comment/Comment';
import CommentWriter from '../comment-writer/CommentWriter'

export class CommentList extends Component {
    componentDidMount = () => {
        this.props.fetchComments();
    };

    render() {
        const comments = this.props.comments.comments.map(comment => (
            <Comment key={comment._id} comment={comment} />
        ));
        return (
            <div>
                {comments}
                <br/>
                <CommentWriter />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    comments: state.comments
});

export default connect(
    mapStateToProps,
    { fetchComments }
)(CommentList);
