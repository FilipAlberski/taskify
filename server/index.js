import path from 'path';
import cors from 'cors';
import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import morgan from 'morgan';
import connectDB from './config/db.js';

// Import routes and middleware
import passwordResetRoutes from './routes/passwordResetRoutes.js';
import userRoutes from './routes/userRoutes.js';
import {
  errorHandler,
  notFound,
} from './middleware/errorMiddleware.js';

const __dirname = path.resolve();

// Deployment configuration
dotenv.config();

// Configure env file in production if NODE_ENV is not set
if (process.env.NODE_ENV === undefined) {
  dotenv.config({ path: '../.env' });
}

// Connect to the database
connectDB();

// Create the Express app
const app = express();

// Middlewares
app.use(express.json());
app.use(cors({ origin: '*' }));

// Morgan for logging
app.use(morgan('dev'));

// API routes
app.use('/api/user', userRoutes);
app.use('/api/password-reset', passwordResetRoutes);

// Serve frontend in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/frontend/build')));

  app.get('*', (req, res) =>
    res.sendFile(
      path.resolve(__dirname, 'frontend', 'build', 'index.html')
    )
  );
}

// Error handling middleware

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port http://localhost:${PORT}`
      .yellow.bold
  )
);
