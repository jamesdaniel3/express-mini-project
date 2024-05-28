import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MessageForm from './components/MessageForm';
import MessageList from './components/MessageList';

const App = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/posts');
            setPosts(response.data);
        } catch (error) {
            console.error('Error fetching posts:', error);
        }
    };

    const createPost = async (post) => {
        try {
            const response = await axios.post('http://localhost:5000/api/posts', post);
            setPosts([...posts, response.data]);
        } catch (error) {
            console.error('Error creating post:', error);
        }
    };

    const updatePost = async (id, updatedPost) => {
        try {
            const response = await axios.put(`http://localhost:5000/api/posts/${id}`, updatedPost);
            const updatedPosts = posts.map(post => (post.id === id ? response.data : post));
            setPosts(updatedPosts);
        } catch (error) {
            console.error('Error updating post:', error);
        }
    };

    const deletePost = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/posts/${id}`);
            const updatedPosts = posts.filter(post => post.id !== id);
            setPosts(updatedPosts);
        } catch (error) {
            console.error('Error deleting post:', error);
        }
    };

    return (
        <div>
            <h1>Social Media App</h1>
            <MessageForm createPost={createPost} />
            <MessageList posts={posts} updatePost={updatePost} deletePost={deletePost} />
        </div>
    );
};

export default App;