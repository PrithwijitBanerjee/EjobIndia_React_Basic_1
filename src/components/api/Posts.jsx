import { useState, useEffect } from 'react';
import axios from 'axios';

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [editingId, setEditingId] = useState(null);
    const [addOrEditPost, setAddOrEditPost] = useState({ title: '', body: '' });

    // Fetch posts
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                setPosts(res.data.slice(0, 10)); // Get first 10 posts
            })
            .catch(err => console.error("Error fetching posts", err));
    }, []);

    // Handle changes in input fields for both new post and editing post
    const handleChange = (e) => {
        const { name, value } = e.target;
        setAddOrEditPost(prev => ({ ...prev, [name]: value }));
    };

    // Create or Update post
    const savePost = () => {
        if (editingId) {
            // Update existing post
            axios.put(`https://jsonplaceholder.typicode.com/posts/${editingId}`, addOrEditPost)
                .then(res => {
                    console.log(res.data)
                    setPosts(posts.map(post => post.id === editingId ? res.data : post));
                    setEditingId(null); // Reset editing mode
                    setAddOrEditPost({ title: '', body: '' }); // Clear fields
                })
                .catch(err => console.error("Error updating post", err));
        } else {
            // Add new post
            axios.post('https://jsonplaceholder.typicode.com/posts', addOrEditPost)
                .then(res => {
                    setPosts([res.data, ...posts]);
                    setAddOrEditPost({ title: '', body: '' }); // Clear fields after posting
                })
                .catch(err => console.error("Error creating post", err));
        }
    };

    // Activate editing mode
    const activateEdit = (post) => {
        setEditingId(post.id);
        setAddOrEditPost({ title: post.title, body: post.body });
    };

    // Delete post
    const deletePost = (id) => {
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => {
                setPosts(posts.filter(post => post.id !== id));
            })
            .catch(err => console.error("Error deleting post", err));
    };

    return (
        <div>
            <input type="text" name="title" placeholder="Title" value={addOrEditPost.title} onChange={handleChange} />
            <input type="text" name="body" placeholder="Body" value={addOrEditPost.body} onChange={handleChange} />
            <button onClick={savePost}>
                {editingId ? 'Update Post' : 'Add Post'}
            </button>

            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Body</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {posts.map(post => (
                        <tr key={post.id}>
                            <td>{post.title}</td>
                            <td>{post.body}</td>
                            <td>
                                <button onClick={() => activateEdit(post)}>Edit</button>
                                <button onClick={() => deletePost(post.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Posts;
