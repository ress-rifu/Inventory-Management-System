import express from 'express';
import cors from 'cors';
import passport from 'passport';
import { sequelize } from './config/db.js';
import './passport.js'; // Initializes passport strategies

// Import route modules
import authRoutes from './routes/authRoutes.js';
import adminRoutes from './routes/adminRoutes.js';
import employeeRoutes from './routes/employeeRoutes.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(passport.initialize());

// Define routes
app.use('/api/auth', authRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/employee', employeeRoutes);

app.get('/', (req, res) => {
  res.send('Server is running!');
});

const PORT = process.env.PORT || 4000;

sequelize.sync()
  .then(() => {
    console.log('Database connected and models synced.');
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error);
  });
