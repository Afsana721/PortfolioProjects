// UserProfile.jsx

import { useState } from 'react';
import '../css/userProfile.css';
import axios from 'axios';

function UserProfile({ userData }) {

  /* Create a hook object using useState to set and update user post data */
  const [userPost, setUserPost] = useState({
    title: '',          // Initially empty fields for user input
    description: '',
    image: null,
    content: ''
  });

  // Handle user post input changes, including image upload
  const handleUserPostData = (event) => {
    const { name, value, files } = event.target;
    const inputValue = name === 'image' ? files[0] : value;
    setUserPost(prev => ({ ...prev, [name]: inputValue }));
  };

  /* Handle form submission and send post data to the server with FormData (for image handling) */
  const handlePostServerData = async (event) => {
    event.preventDefault(); // Stop form default behavior

    const formData = new FormData();
    formData.append('title', userPost.title);
    formData.append('description', userPost.description);
    formData.append('content', userPost.content);

    if (userPost.image) {
      formData.append('image', userPost.image); // Only if user uploaded image
    }

    try {
      // Send the post to server to save it in DB
      const response = await axios.post('http://localhost:5000/UserProfile', formData);
    } catch (error) {
      console.log("Error : ", error);
    }
  };

  /* Create a hook to store and update the list of posts fetched from DB */
  const [posts, setPost] = useState([]);

  // Create function to get posts from DB using query params based on userPost
  const getPostFromServer = async () => {
    try {
      const response = await axios.get('http://localhost:5000/UserProfile', {
        params: {
          title: userPost.title,
          description: userPost.description,
          image: userPost.image,
          content: userPost.content
        }
      });
      setPost(response.data); // Set filtered posts in state
    } catch (error) {
      console.log("Error : ", error);
    }
  };

  return (
    <main className='profile-wrapper'>
      <section className='profile-container'>

        {/* User info display section */}
        <section className='user-card'>
          <h1 className='profile-heading'>Welcome, {userData.name || 'Guest'}</h1>
          <section className='user-info'>
            <label htmlFor='name'>Name</label>
            <input type='text' id='name' name='name' value={userData.name} />

            <label htmlFor='profession'>Profession</label>
            <input type='text' id='profession' name='profession' value={userData.profession} />

            <label htmlFor='address'>Address</label>
            <input type='text' id='address' name='address' value={userData.address} />

            <label htmlFor='concern'>Concern</label>
            <input type='text' id='concern' name='concern' value={userData.concern} />
          </section>
        </section>

        {/* Post creation form section */}
        <section className='post-card'>
          <form onSubmit={handlePostServerData} className='user-post-form'>
            <label htmlFor='title'>Title</label>
            <input type='text' id='title' name='title' value={userPost.title} onChange={handleUserPostData} required />

            <label htmlFor='description'>Description</label>
            <input type='text' id='description' name='description' value={userPost.description} onChange={handleUserPostData} required />

            <label htmlFor='image'>Image Upload</label>
            <input type='file' id='image' name='image' accept='image/*' onChange={handleUserPostData} required />

            <label htmlFor='content'>Post Content</label>
            <input type='text' id='content' name='content' value={userPost.content} onChange={handleUserPostData} required />

            <button type='submit'>Post</button>
          </form>

          {/* Display post list */}
          <section className='post-list'>
            {posts.map((post, index) => (
              <article key={index} className='post-item'>
                <h2>{post.title}</h2>
                <p>{post.description}</p>
                {post.image && <img src={post.image} alt='user post' />}
                <p>{post.content}</p>
                <p className='post-date'>{post.timestamp}</p>
              </article>
            ))}
          </section>
        </section>
      </section>
    </main>
  );
}

export default UserProfile;
