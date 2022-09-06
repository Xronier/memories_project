// This file holds non-logical routes, meaning it simply imports functions from controllers (which host routing logic)
import express from 'express';

import { getPosts, createPost, updatePost, deletePost, likePost } from '../controllers/posts.js'
const router = express.Router();

// Establish route at localhost:5000/
router.get('/', getPosts)
router.post('/', createPost)
// Needs id to update
router.patch('/:id', updatePost)
router.delete('/:id', deletePost);
router.patch('/:id/likePost', likePost);

export default router;
