import React, { useState } from 'react';

const Message = ({ post, updatePost, deletePost }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [username, setUsername] = useState(post.username);
    const [message, setMessage] = useState(post.message);

    const handleUpdate = () => {
        updatePost(post.id, { username, message });
        setIsEditing(false);
    };

    const handleDelete = () => {
        deletePost(post.id);
    };

    return (
        <div>
            {isEditing ? (
                <>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                    <button onClick={handleUpdate}>Save</button>
                </>
            ) : (
                <>
                    <h3>{post.username}</h3>
                    <p>{post.message}</p>
                    <button onClick={() => setIsEditing(true)}>Edit</button>
                    <button onClick={handleDelete}>Delete</button>
                </>
            )}
        </div>
    );
};

export default Message;