// components/CreatePostModal.tsx
import React, { useState } from 'react';
import Modal from 'react-modal';

interface CreatePostModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

const CreatePostModal: React.FC<CreatePostModalProps> = ({ isOpen, onRequestClose }) => {
    const [title, setTitle] = useState<string>('');
    const [content, setContent] = useState<string>('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await fetch('/api/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title, content }),
        });
        onRequestClose(); // Close the modal after submission
        // Optionally, refresh the posts list here
    };

    return (
        <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
            <h2>Create New Post</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Post Title"
                    required
                />
                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Post Content"
                    required
                />
                <button type="submit">Create Post</button>
            </form>
        </Modal>
    );
};

export default CreatePostModal;