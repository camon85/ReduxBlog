import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions';
import { Link } from 'react-router'

class PostsNew extends Component {
    render() {
        const { fields: { title, categories, content }, handleSubmit} = this.props;
        console.log(title);

        return (
            <form onSubmit={handleSubmit(this.props.createPost)}>
                <h3>Create A New Post</h3>
                <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
                    <label>Title</label>
                    <input type="text" className="form-control" {...title}/>
                    <div className="text-help">
                        {title.touched ? title.error : ''}
                    </div>
                </div>

                <div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`}>
                    <label>Categories</label>
                    <input type="text" className="form-control" {...categories}/>
                    <div className="text-help">
                        {categories.touched ? categories.error : ''}
                    </div>
                </div>

                <div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`}>
                    <label>Content</label>
                    <textarea className="form-control" {...content}/>
                    <div className="text-help">
                        {content.touched ? content.error : ''}
                    </div>
                </div>

                <button type="submit" className="btn btn-primary">submit</button>
            </form>
        );
    }
}


function validate(values) {
    const errors = {};

    if (!values.title) {
        errors.title = 'Enter a title';
    }
    if (!values.categories) {
        errors.categories = 'Enter a categories';
    }
    if (!values.content) {
        errors.content = 'Enter a content';
    }
    return errors;
}

// connect: first argument is mapStateToProps, 2nd is mapDispatchToProps
// reduxForm: 1st is form config, 2nd is mapStateToProps, 3rd is mapDispatchToProps

export default reduxForm({
    form: 'PostsNewForm',
    fields: ['title', 'categories', 'content'],
    validate
}, null, { createPost })(PostsNew);




// user types something in ... recrod in on application state  (component 레벨 state가 아니라 application 레벨 state)
// state === {
//     form: {
//         PostsNewForm: {
//             title: '...',
//             categories: '...',
//             content: '...'
//         }
//     }
// }