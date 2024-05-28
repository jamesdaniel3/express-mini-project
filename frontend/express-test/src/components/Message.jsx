import React, { useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap';

const Message = ({ post, updatePost, deletePost }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [message, setMessage] = useState(post.message);

    const handleUpdate = () => {
        updatePost(post.id, { ...post, message });
        setIsEditing(false);
    };

    const handleDelete = () => {
        deletePost(post.id);
    };

    return (
        <Card
            className="mb-3"
            style={{width: '18rem', margin: '1rem'}}
        >
            <Card.Body>
                {isEditing ? (
                    <Form>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                        <div className="mt-2">
                            <Button variant="primary" onClick={handleUpdate}>
                                Save
                            </Button>
                            <Button
                                variant="secondary"
                                className="ml-2"
                                onClick={() => setIsEditing(false)}
                            >
                                Cancel
                            </Button>
                        </div>
                    </Form>
                ) : (
                    <div onClick={() => setIsEditing(true)}>
                        <Card.Text>{post.message}</Card.Text>
                    </div>
                )}
            </Card.Body>
            <Card.Footer className="d-flex justify-content-between align-items-center">
                <Button
                    variant="danger"
                    size="sm"
                    onClick={handleDelete}
                >
                    Delete
                </Button>
                <small className="text-muted">{post.username}</small>
            </Card.Footer>
        </Card>
    );
};

export default Message;