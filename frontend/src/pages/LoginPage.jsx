import React from 'react';
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  FormControlLabel,
  Grid,
  Link,
  Checkbox,
} from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';
import * as yup from 'yup';
import { useFormik } from 'formik';
import axios from 'axios';
import { LOGIN_URL } from '../constants/Constant';
import MuiAlert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import Button from '@mui/material/Button';

const validationSchema = yup.object({
  email: yup.string().required('Email is required').email('Email is invalid'),
  password: yup.string().required('Password is required'),
});

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const LoginPage = () => {
  const [formError, setFormError] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  const onSubmit = async (values, formikHelpers) => {
    await axios
      .post(LOGIN_URL, values)
      .then((response) => {
        setOpen(true);
        console.log(response);
        console.log(response.data);
        formikHelpers.resetForm();
      })
      .catch((error) => {
        setFormError(true);
        console.log(error);
      });
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit,
  });

  return (
    <>
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
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={formik.handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email && (
              <div style={{ color: 'red' }}>{formik.errors.email}</div>
            )}
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password && (
              <div style={{ color: 'red' }}>{formik.errors.password}</div>
            )}

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="forgot-password" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        {formError ? (
          <Alert severity="error">
            An error has occured trying to sign you in!
          </Alert>
        ) : null}

        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: '100%' }}
          >
            Login Successful, Have fun!
          </Alert>
        </Snackbar>
      </Container>
    </>
  );
};

export default LoginPage;
