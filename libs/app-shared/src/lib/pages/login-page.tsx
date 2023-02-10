import { useFormik, FormikProvider, Form } from 'formik';
import * as yup from 'yup';
import { Button, Container, Grid, Typography } from '@mui/material';
import { DirectionType, FormInput } from '@mf-mui-starter/common-lib';

export interface LoginFormProp {
  onSubmit: () => void;
}

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

export const LoginForm = ({ onSubmit }: LoginFormProp) => {
  const formik = useFormik({
    initialValues: {
      email: 'foobar@example.com',
      password: 'foobar',
    },
    validationSchema: validationSchema,
    onSubmit: onSubmit,
  });

  return (
    <Container maxWidth="sm">
      <FormikProvider value={formik}>
        <Form>
          <Grid container spacing={3} direction={'column'}>
            <Grid item>
              <Typography variant="body16">LOGIN FORM</Typography>
            </Grid>
            <FormInput
              label="Email"
              name="email"
              testId="email"
              placeholder="Please input email"
              direction={DirectionType.column}
              required
              type="email"
            />
            <FormInput
              label="Password"
              name="password"
              testId="password"
              placeholder="Please input password"
              direction={DirectionType.column}
              required
              type="password"
            />
            <Grid item container justifyContent="flex-end">
              <Button variant="contained" type="submit">
                Submit
              </Button>
            </Grid>
          </Grid>
        </Form>
      </FormikProvider>
    </Container>
  );
};
