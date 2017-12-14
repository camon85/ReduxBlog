import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/app';
import PostIndex from './components/posts_index';
import PostsNew from './components/posts_new';
import PostsShow from './components/posts_show';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={PostIndex}/>
    <Route path="posts/new" component={PostsNew}/>
    <Route path="posts/:id" component={PostsShow}/>
  </Route>
)

// <Route path="posts/:id" component={PostsShow}/>      =>  this.props.props.params.id
// <Route path="posts/:post_id" component={PostsShow}/> =>  this.props.props.params.post_id