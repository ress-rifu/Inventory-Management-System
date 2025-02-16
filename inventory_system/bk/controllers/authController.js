import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { User } from '../models/User.js';

export async function register(req, res) {
  try {
    const { email, password, role } = req.body;
    // Allow only valid roles; default to 'employee'
    const validRoles = ['admin', 'employee'];
    const userRole = validRoles.includes(role) ? role : 'employee';
    
    const hashedPassword = await bcrypt.hash(password, 10);
    
    const newUser = await User.create({
      email,
      password: hashedPassword,
      role: userRole
    });
    
    res.status(201).json({
      message: 'User registered successfully',
      user: { email: newUser.email, role: newUser.role }
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function login(req, res) {
  try {
    const token = jwt.sign(
      { id: req.user.id, role: req.user.role },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );
    res.status(200).json({ message: 'Login successful', token, role: req.user.role });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
