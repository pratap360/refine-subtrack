import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="/">
        Subtrack
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}



export default function SignIn() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <AccountCircleIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
                margin="normal"
                fullWidth
                required
                id="fname"
                label="First Name"
                name="First Name"
                autoComplete='First Name'
                autoFocus
            />
            <TextField
                margin="normal"
                fullWidth
                required
                id="lname"
                label="Last Name"
                name="Last Name"
                autoComplete='Last Name'
                autoFocus
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
            />
            <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Select Currency</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Select Currency"
        >
          <MenuItem value="rupees">Rupee ₹</MenuItem>
          <MenuItem value="euro">Euro  €</MenuItem>
          <MenuItem value="dollar">Dollar $</MenuItem>
          <MenuItem value="pound">Pound  £</MenuItem>
          <MenuItem value="yen">Yen  ¥</MenuItem>
        </Select>
            </FormControl>
            <Button 
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
          </Box>

          <Typography variant="body2" color="text.secondary" align="center">
          Already have an account? 
          </Typography>
            <Link href="/login">Log In</Link>
        </Box>
        
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
  );
}



