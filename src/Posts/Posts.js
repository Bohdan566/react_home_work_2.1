import React, {Component} from 'react';
import Post from "../Post/Post";

class Posts extends Component {
    constructor() {
        super();
    }

    state = {posts: [], chosenPost: null};

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(value => value.json())
            .then(posts =>{
                this.setState({posts})
            })
    }

    onSetChosen = (id) =>{
        let {posts} = this.state;
        let findPost = posts.find(value => value.id === id);
        this.setState({chosenPost: findPost});
    }


    render() {

        let {posts, chosenPost} = this.state;
        return (
            <div>
                {
                    posts.map(post => <Post item={post} key={post.id} onSetChosen={this.onSetChosen}/>)
                }
                {
                    chosenPost && <h2>{chosenPost.id}<br/>{chosenPost.title}<br/>{chosenPost.body}</h2>
                }
            </div>
        );
    }
}

export default Posts;