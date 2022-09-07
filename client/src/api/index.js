// Where http requests are done
import axios from 'axios'

// const url = 'https://memories8.herokuapp.com/posts';
const url = ''https://memories8.herokuapp.com/posts'

// Get posts from DB
export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);


