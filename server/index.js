import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

// Import post routes
import postRoutes from './routes/posts.js';

// Always need to initialize express like this.
const app = express();
dotenv.config();

// Uses express middleware to setup starting path for all routes in post.js (all routes in post.js are reached by using localhost:5000/posts).
// localhost:5000 is the server, not the client.

// Setup body parser to properly send requests
app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
// Needs to be above routes like /posts
app.use(cors());

app.use('/posts', postRoutes);
app.get('/', (req, res) => {
    res.send("Hello to API");
});

const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server Running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));
