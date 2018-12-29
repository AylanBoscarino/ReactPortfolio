import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'bulma';

import { fetchComments } from '../../actions/comments';
import Comment from '../comment/Comment';

export class CommentList extends Component {
    componentDidMount = () => {
        this.props.fetchComments();
    };

    render() {
        const comments = this.props.comments.comments.map(comment => (
            <Comment key={comment.id} comment={comment} />
        ));
        return (
            <div>
                {comments}
            </div>
        )
    }
}

const mapStateToProps = state => {
  console.log({state})
    return {
        comments: state.comments
    };
};

export default connect(
    mapStateToProps,
    { fetchComments }
)(CommentList);
