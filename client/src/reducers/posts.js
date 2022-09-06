import {FETCH_ALL, CREATE, UPDATE, DELETE, LIKE} from '../constants/actionTypes';
// eslint-disable-next-line
export default (posts = [], action) => {
    switch (action.type) {
        case FETCH_ALL:
            return action.payload;
        case CREATE:
            return [...posts, action.payload]; // Return all posts + the new one.
        case UPDATE:
        case LIKE:
            return posts.map((post) => (post._id === action.payload._id ? action.payload : post)); // Use map to update one post in posts, while leaving the rest alone
        case DELETE:
            return posts.filter((post) => post._id !== action.payload);
        default:
            return posts;
    }
};