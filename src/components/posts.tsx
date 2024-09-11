// // import { useEffect, useState } from 'react';

// // interface Post {
// //   id: number;
// //   title: string;
// //   content: string;
// // }

// // export default function PostsPage() {
// //   const [posts, setPosts] = useState<Post[]>([]);
// //   const [title, setTitle] = useState<string>('');
// //   const [content, setContent] = useState<string>('');

// //   useEffect(() => {
// //     fetch('/api/posts')
// //       .then((res) => res.json())
// //       .then((data) => setPosts(data));
// //   }, []);

// //   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
// //     e.preventDefault();
// //     const res = await fetch('/api/posts', {
// //       method: 'POST',
// //       headers: { 'Content-Type': 'application/json' },
// //       body: JSON.stringify({ title, content }),
// //     });
// //     const newPost = await res.json();
// //     setPosts([...posts, newPost]);
// //     setTitle('');
// //     setContent('');
// //   };

// //   const handleDelete = async (id: number) => {
// //     await fetch('/api/posts', {
// //       method: 'DELETE',
// //       headers: { 'Content-Type': 'application/json' },
// //       body: JSON.stringify({ id }),
// //     });
// //     setPosts(posts.filter((post) => post.id !== id));
// //   };

// //   return (
// //     <div>
// //       <h1>Posts</h1>
// //       <form onSubmit={handleSubmit}>
// //         <input
// //           type="text"
// //           value={title}
// //           onChange={(e) => setTitle(e.target.value)}
// //           placeholder="Title"
// //           required
// //         />
// //         <textarea
// //           value={content}
// //           onChange={(e) => setContent(e.target.value)}
// //           placeholder="Content"
// //           required
// //         />
// //         <button type="submit">Create Post</button>
// //       </form>
// //       <ul>
// //         {posts.map((post) => (
// //           <li key={post.id}>
// //             <h2>{post.title}</h2>
// //             <p>{post.content}</p>
// //             <button onClick={() => handleDelete(post.id)}>Delete</button>
// //           </li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // }


// import React, { useState } from 'react';
// import Modal from 'react-modal';

// interface CreatePostModalProps {
//     isOpen: boolean;
//     onRequestClose: () => void;
// }

// const CreatePostModal: React.FC<CreatePostModalProps> = ({ isOpen, onRequestClose }) => {
//     const [title, setTitle] = useState<string>('');
//     const [content, setContent] = useState<string>('');

//     const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
//         await fetch('/api/posts', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({ title, content }),
//         });
//         onRequestClose(); // Close the modal after submission
//         // Optionally, refresh the posts list here
//     };

//     return (
//         <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
//             <h2>Create New Post</h2>
//             <form onSubmit={handleSubmit}>
//                 <input
//                     type="text"
//                     value={title}
//                     onChange={(e) => setTitle(e.target.value)}
//                     placeholder="Post Title"
//                     required
//                 />
//                 <textarea
//                     value={content}
//                     onChange={(e) => setContent(e.target.value)}
//                     placeholder="Post Content"
//                     required
//                 />
//                 <button type="submit">Create Post</button>
//             </form>
//         </Modal>
//     );
// };

// export default CreatePostModal;