import React, { useState } from 'react';
import axios from 'axios';
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  CssBaseline,
  Paper,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import bcrypt from 'bcryptjs'; // Import bcryptjs for hashing (install it via npm/yarn)

const Signup = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [signupError, setSignupError] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      // Hash the password on the client side (for demonstration purposes)
      const hashedPassword = await bcrypt.hash(password, 10); // Salt rounds: 10

      const response = await axios.post('http://localhost:5000/auth/signup', {
        username,
        password: hashedPassword,
        name,
        phone,
      });

      // Handle the response properly
      if (response.data.success) {
        alert('Signup successful!'); // Alert or handle success appropriately
        navigate('/login');
      } else {
        alert(response.data.message); // Display the message from the backend
      }
    } catch (err) {
      console.error(err);
      setSignupError('Error signing up'); // Set error state for display
    }
  };

  const goToLogin = () => {
    navigate('/login');
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Paper
        elevation={6}
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: 2,
        }}
      >
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <Box component="form" onSubmit={handleSignup} sx={{ mt: 2 }}>
          {signupError && (
            <Typography color="error" variant="body2" align="center" mb={2}>
              {signupError}
            </Typography>
          )}
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name"
            name="name"
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="phone"
            label="Phone"
            name="phone"
            autoComplete="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
        </Box>
      </Paper>
      <Button onClick={goToLogin} fullWidth>
        Already a user? Click to login
      </Button>
    </Container>
  );
};

export default Signup;
