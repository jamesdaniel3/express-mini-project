import React, { useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap';

const MessageForm = ({ createPost }) => {
    const [username, setUsername] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        createPost({ username, message });
        setUsername('');
        setMessage('');
    };

    return (
        <>
            <Card
                style={{width: '18rem', margin: '1rem' }}
            >
                <Card.Header className="text-white" style={{backgroundColor: '#65A765'}}>
                    <h5>Make a post</h5>
                </Card.Header>
                <Card.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="username">
                            <Form.Control
                                type="text"
                                placeholder="Username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="message">
                            <Form.Control
                                as="textarea"
                                rows={3}
                                placeholder="Message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Post
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </>
    );
};

export default MessageForm;