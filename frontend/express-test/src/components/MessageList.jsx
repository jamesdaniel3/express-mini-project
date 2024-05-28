import React from 'react';
import Message from './Message';

const MessageList = ({ posts, updatePost, deletePost }) => {
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {posts.map(post => (
                <div key={post.id} style={{ width: '0 0 300px', marginBottom: '10px' }}>
                    <Message post={post} updatePost={updatePost} deletePost={deletePost} />
                </div>
            ))}
        </div>
    );
};

export default MessageList;