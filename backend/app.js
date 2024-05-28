const express = require('express');
const cors = require('cors');
const db = require('./firebase');

const app = express();
app.use(express.json());
app.use(cors());

// GET all posts
app.get('/api/posts', async (req, res) => {
    try {
        const snapshot = await db.collection('posts').get();
        const posts = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        res.json(posts);
    } catch (error) {
        console.error('Error getting posts:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// POST a new post
app.post('/api/posts', async (req, res) => {
    try {
        const { username, message } = req.body;
        const docRef = await db.collection('posts').add({ username, message });
        res.json({ id: docRef.id, username, message });
    } catch (error) {
        console.error('Error creating post:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// PUT update a post
app.put('/api/posts/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { username, message } = req.body;
        await db.collection('posts').doc(id).update({ username, message });
        res.json({ id, username, message });
    } catch (error) {
        console.error('Error updating post:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// DELETE a post
app.delete('/api/posts/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await db.collection('posts').doc(id).delete();
        res.sendStatus(204);
    } catch (error) {
        console.error('Error deleting post:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});