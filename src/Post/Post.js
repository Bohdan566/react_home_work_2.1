import React, {Component} from 'react';
import "./StylePost.css";

class Post extends Component {
    render() {
        let {item, onSetChosen} = this.props
        return (
            <div>
                <div className={"divka"}>{item.id}<br/>{item.title}<br/>{item.body}<br/><br/></div>

                <button onClick={()=>onSetChosen(item.id)} className={"btn"}>chose</button>
            </div>
        );
    }
}

export default Post;