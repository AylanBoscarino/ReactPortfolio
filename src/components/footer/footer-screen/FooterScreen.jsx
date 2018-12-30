import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import CommentList from '../comment-list/CommentList'
import FormAuth from '../form/FormAuth'
import CommentWriter from '../comment-writer/CommentWriter'

export class FooterScreen extends Component {
  static propTypes = {
    isLoged: PropTypes.bool
  }

  render() {
    const isLoged = this.props.isLoged;
    return (
      <div>
        <CommentList />
          <br />
        {isLoged ? <CommentWriter />: <FormAuth />}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  ...state.usuario
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(FooterScreen)
