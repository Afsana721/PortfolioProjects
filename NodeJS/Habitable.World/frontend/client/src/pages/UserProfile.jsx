// UserProfile.jsx

import { useEffect, useState, useRef } from 'react';
import '../css/userProfile.css';
import axios from 'axios';
import { useCallback } from 'react';

function UserProfile({ userData }) {

  const imageRef = useRef();

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
    event.preventDefault();
    console.log("Post form data submitted:", userPost);

    const formData = new FormData();
    formData.append('title', userPost.title);
    formData.append('description', userPost.description);
    formData.append('content', userPost.content);
    formData.append('userId', userData._id); //important
    if (userPost.image) {
      formData.append('image', userPost.image);
    }

    try {
      const response = await axios.post('http://localhost:5000/UserProfile', formData);
      console.log("Post submitted:", response.data);
      await getPostFromServer();      //refresh post list
      setUserPost({ title: "", description: "", content: "", image: null });
      if (imageRef.current) {
        imageRef.current.value = null;
      }

    } catch (error) {
      console.log("Error:", error);
    }
  };


  /* Create a hook to store and update the list of posts fetched from DB */
  const [posts, setPost] = useState([]);


  // Create function to get posts from DB using query params based on userPost
  const getPostFromServer = useCallback(async () => {
    try {
      const userId = userData._id;
      console.log("Fetching posts for userId:", userId);
      const response = await axios.get(`http://localhost:5000/UserProfile?userId=${userId}`);
      console.log("Fetched posts:", response.data);

      const postsData = response.data?.posts || response.data?.post;
      if (Array.isArray(postsData)) {
        setPost(postsData);
      } else if (postsData) {
        setPost([postsData]); // wrap object into array
      } else {
        setPost([]);
      }

    } catch (error) {
      console.log("Error:", error);
      setPost([]); // prevent crash on failure
    }
  }, [userData]);



  //user useEffect to call funciton after first render 
  useEffect(() => {
    if (userData && userData._id) {
      getPostFromServer();
    }
  }, [userData, getPostFromServer]);


  /* Edit post data - so track which post is being edited by state, so when post edite it will store in editPost by id*/
  const [editedPost, setEditedPost] = useState(null);

  //Handle edit event and take user input data
  const handleEditInput = (event) => {
    const { name, value, files } = event.target;

    const inputValue = name === 'image' ? files[0] : value;
    setEditedPost(prevDate => ({ ...prevDate, [name]: inputValue }));
  }

  //After edit post then need to save them in db by sending request to server
  const handleEditPostToServer = async (postId) => {
    try {
      // Send editedPost data to server (needs editedPost object and backend endpoint)
      await axios.put(`http://localhost:5000/UserProfile/${postId}`, editedPost);
      setEditedPost(null);
      getPostFromServer();
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  // Cancel edit mode
  const cancelEdit = () => {
    setEditedPost(null);
  };

  //Handle delete event and remove data from fiber node 
  const handleDeletePostEvent = (postId) => {
    handleDeletePostToServer(postId);
  }

  // Delete a post by ID
  const handleDeletePostToServer = async (postId) => {
    try {
      await axios.delete(`http://localhost:5000/UserProfile/${postId}`);
      getPostFromServer();
    } catch (error) {
      console.log("Error deleting post: ", error);
    }
  };

  console.log("Posts before render:", posts);
  return (
    <main className='profile-wrapper'>
      <section className='profile-container'>

        {/* User info display section */}
        <section className='user-card'>
          <h1 className='profile-heading'>Welcome, {userData.username || 'Guest'}</h1>
          <section className='user-info'>
            <label htmlFor='name'>Name</label>
            <input type='text' id='name' name='name' value={userData.username} readOnly />

            <label htmlFor='profession'>Profession</label>
            <input type='text' id='profession' name='profession' value={userData.profession} readOnly />

            <label htmlFor='address'>Address</label>
            <input type='text' id='address' name='address' value={userData.address} readOnly />

            <label htmlFor='concern'>Concern</label>
            <input type='text' id='concern' name='concern' value={userData.concern} readOnly />
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
            <input type='file' id='image' name='image' accept='image/*' onChange={handleUserPostData} required ref={imageRef} />

            <label htmlFor='content'>Post Content</label>
            <input type='text' id='content' name='content' value={userPost.content} onChange={handleUserPostData} required />

            <button type='submit'>Post</button>
          </form>

          {/* Display post list */}

          <section className='post-list'>
            {posts.map((post, index) => (
              <article key={index} className='post-item'>
                {/* "check if edit post id is equal post id then react goes to next process" */}
                {editedPost && editedPost._id === post._id ? (
                  <>
                    {/* Editable input fields */}
                    <input type="text" name="title" value={editedPost.title} onChange={handleEditInput} />
                    <input type="text" name="description" value={editedPost.description} onChange={handleEditInput} />
                    <input type="text" name="content" value={editedPost.content} onChange={handleEditInput} />
                    <input type="file" name="image" onChange={handleEditInput} />

                    {/* Save button to update the post */}
                    <button onClick={() => handleEditPostToServer(post._id)}>Save</button>
                    {/* Cancel button to exit edit mode */}
                    <button onClick={cancelEdit}>Cancel</button>
                  </>
                ) : (
                  <>
                    {/* Display normal post data */}
                    <h2>{post.title}</h2>
                    <p>{post.description}</p>
                    {post.image && <img src={`http://localhost:5000/uploads/${post.image}`} alt='user post' />}
                    <p>{post.content}</p>
                    <p className='post-date'>{post.timestamp}</p>

                    {/* Buttons for edit and delete actions */}
                    <button onClick={() => setEditedPost(post)}>Edit</button>
                    <button onClick={() => handleDeletePostEvent(post._id)}>Delete</button>
                  </>
                )}
              </article>
            ))}
          </section>

        </section>
      </section>
    </main>
  );
}

export default UserProfile;
