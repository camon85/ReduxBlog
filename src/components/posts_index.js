import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from "../actions";

class PostsIndex extends  Component {
    componentWillMount() {
        this.props.fetchPosts();
    }

    render() {
        return (<div>List of log posts.</div>);
    }

}

export default connect(null, { fetchPosts })(PostsIndex);

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