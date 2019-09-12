import React from 'react';

export default class posts extends Component {
    constructor () {
        super();
        this.state = { posts: ['1', '2', '3'] }
    }

    reder () {
        return this.state.posts.map((post) => {
            <center>
                {post}
            </center>
        })
    }
}