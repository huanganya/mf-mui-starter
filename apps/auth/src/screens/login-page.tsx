import { useFormik } from 'formik';
import * as yup from 'yup';
import { Button, Container, Grid, InputLabel, TextField } from '@mui/material';
import { AuthContext } from '@mf-mui-starter/app-shared/app-manager';
import React from 'react';

const validationSchema = yup.object({
  email: yup
    .string()
    .required('Email is required')
    .email('Enter a valid email'),
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password should be of minimum 8 characters length'),
});

const LoginForm = () => {
  const { setIsLoggedIn } = React.useContext(AuthContext);
  const formik = useFormik({
    initialValues: {
      email: 'foobar@example.com',
      password: 'foobar',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      setIsLoggedIn(true);
    },
  });

  return (
    <Container maxWidth="sm">
      <form onSubmit={formik.handleSubmit}>
        <Grid container direction={'column'}>
          <Grid item container direction={'column'}>
            <Grid item>
              <InputLabel shrink htmlFor="email">
                Email
              </InputLabel>
            </Grid>
            <Grid item>
              <TextField
                fullWidth
                id="email"
                name="email"
                variant="outlined"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </Grid>
          </Grid>
          <Grid item container direction={'column'}>
            <Grid item>
              <InputLabel shrink htmlFor="password">
                Password
              </InputLabel>
            </Grid>
            <Grid item>
              <TextField
                fullWidth
                id="password"
                name="password"
                variant="outlined"
                type="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
              />
            </Grid>
          </Grid>
        </Grid>
        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default LoginForm;
