import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from "../actions";
import {Link} from 'react-router';

class PostsIndex extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    return this.props.posts.map((post) => {
      return (
        <li className="list-group-item" key={post.id}>
          <Link to={'posts/' + post.id}>
          <span className="pull-xs-right">{post.categories}</span>
          <strong>{post.title}</strong>
          </Link>
        </li>
      )
    })
  }

  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link to="/posts/new" className="btn btn-primary">
            Add a Post
          </Link>
        </div>
        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    );
  }

}

function mapStateToProps(state) {
  return {
    posts: state.posts.all
  };
}

export default connect(mapStateToProps, {fetchPosts})(PostsIndex);

/////////////////////////////////////////////////////
// 보일러플레이트를 아래처럼 한줄로 바꿀수도 있다.
/////////////////////////////////////////////////////
//---------------
// 변경 전
//---------------
// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({
//         fetchPosts
//     }, dispatch)
// }
//
// export default connect(null, mapDispatchToProps)(PostsIndex);

//---------------
// 변경 후
//---------------
// export default connect(null, { fetchPosts })(PostsIndex);