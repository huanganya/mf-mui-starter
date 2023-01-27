import { useFormik, FormikProvider, Form } from 'formik';
import * as yup from 'yup';
import { Button, Container, Grid, Typography } from '@mui/material';
import { AuthContext } from '@mf-mui-starter/app-shared/app-manager';
import React from 'react';
import { DirectionType, FormInput } from '@mf-mui-starter/common-lib';

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
      <FormikProvider value={formik}>
        <Form>
          <Grid container spacing={3} direction={'column'}>
            <Grid item>
              <Typography variant="h5">Please login first</Typography>
            </Grid>
            <FormInput
              label="Email"
              name="email"
              direction={DirectionType.column}
              required
              testId="email"
              type="email"
              onChange={formik.handleChange}
            />
            <FormInput
              label="Password"
              name="password"
              testId="password"
              direction={DirectionType.column}
              required
              type="password"
              onChange={formik.handleChange}
            />
            <Grid item container>
              <Button
                color="primary"
                variant="contained"
                fullWidth
                type="submit"
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </Form>
      </FormikProvider>
    </Container>
  );
};

export default LoginForm;
