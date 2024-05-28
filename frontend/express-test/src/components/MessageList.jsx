import React from 'react';
import Message from './Message';

const MessageList = ({ posts, updatePost, deletePost }) => {
    return (
        <div>
            {posts.map(post => (
                <Message key={post.id} post={post} updatePost={updatePost} deletePost={deletePost} />
            ))}
        </div>
    );
};

export default MessageList;